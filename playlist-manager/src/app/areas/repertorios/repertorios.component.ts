import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Musica } from 'src/app/interfaces/musica.model';
import { FormBuilder, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { RepertoriosService } from 'src/app/services/repertorios.service';
import { Repertorio } from 'src/app/interfaces/repertorio.model';
import { Setlist } from 'src/app/interfaces/setlist.model';
import { generateId } from 'src/app/shared/GLOBAL_FUNCTIONS';
import { Grupo } from 'src/app/interfaces/grupo.model';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { NgNavigatorShareService } from 'ng-navigator-share';


@Component({
  selector: 'app-repertorios',
  templateUrl: './repertorios.component.html',
  styleUrls: ['./repertorios.component.css']
})
export class RepertoriosComponent implements OnInit {

  @Input() musicasRepertorio: any[];
  @Output() qtdGroupSetListsEvent = new EventEmitter<number>();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [COMMA, ENTER];
  momentos = [];
  grupo: Grupo;
  grupoSetLists: Setlist[] = [];
  tituloRepertorio = "Novo Repertório";
  setlistEdicao: Setlist;
  //setList: any[] = this.musicasRepertorio;
  constructor(    
    private fb: FormBuilder, 
    private repertorioService: RepertoriosService,
    private _adapter: DateAdapter<any>,
    private shareService: NgNavigatorShareService) { }


  formNovoRepertorio = this.fb.group({
    titulo: ['', Validators.required],
    dataEvento: ['', Validators.required],
    momentos: ['']
  });

  ngOnInit() {
    this._adapter.setLocale('pt-BR');
    this.grupo = JSON.parse(localStorage.getItem('grupo'));
    this.repertorioService.getSetLists(this.grupo).subscribe(setlists => {
      this.grupoSetLists = setlists as Setlist[];
      this.grupoSetLists.sort((a, b) => (a.dataEvento > b.dataEvento) ? 1 : -1);
      console.log("SETLISTS", this.grupoSetLists);
      this.qtdGroupSetListsEvent.emit(this.grupoSetLists.length);
    }, error => {
      alert("Falha ao obter setlists");
    });
  }


  criarRepertorio(){
    let repertorio: Setlist = {
      id: this.setlistEdicao ? this.setlistEdicao.id : this.grupo.id + "_" + generateId(),
      idGrupo: this.setlistEdicao ? this.setlistEdicao.idGrupo : this.grupo.id,
      tituloEvento: this.formNovoRepertorio.value.titulo.toString(),
      dataEvento: this.formNovoRepertorio.value.dataEvento,
      items: this.musicasRepertorio     
    };
    console.log("REPERTORIO", repertorio);
    this.repertorioService.createSetlist(this.grupo, repertorio).then(res => {     
      this.musicasRepertorio = [];
      console.log(repertorio);

      this.setlistEdicao = null;
      this.tituloRepertorio = "Novo Repertório";

    }).catch(error => {
      alert("Deu errado! :(");
      console.log(error);
    });
    
  }

  cancelarCriacaoRepertorio(){
    this.musicasRepertorio = [];
    this.momentos = [];
    this.formNovoRepertorio.setValue({
      titulo:null,
      dataEvento: null,
      momentos:[]
    });
  }

  async compartilhar(setlist){
    try{
      const sharedResponse = await this.shareService.share({
        title:'`Web Articles and Tutorials',
        text: 'Check out my blog — its worth looking.',
        url: 'www.codershood.info'
      });
      console.log(sharedResponse);
    } catch(error) {
      console.log('You app is not shared, reason: ', error);
    }
  }

  // podeEditarSetlist(setlist: Setlist){
  //   let hoje = new Date();
  //   return setlist.dataEvento.toDate() >= hoje;
  // }

  editarSetlist(setlist: Setlist){
    // if(!this.podeEditarSetlist(setlist)){
    //   alert("Não é possível editar a lista de um evento passado");
    //   return;
    // }
    // this.tituloRepertorio = "Editar Repertório";
    // console.log("Editar setlist")
    // this.momentos = setlist.items.filter(i => !i.nome);
    // this.musicasRepertorio = setlist.items;

    // window.scroll(0, 0);
    // this.formNovoRepertorio.setValue({
    //   titulo: setlist.tituloEvento,
    //   dataEvento: setlist.dataEvento.toDate(),
    //   momentos:[]
    // });  

    // this.setlistEdicao = setlist;
    // console.log(this.formNovoRepertorio.value.dataEvento);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.momentos.unshift(value.trim());
      this.musicasRepertorio.unshift(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(momento: string): void {
    const indexMomentos = this.momentos.indexOf(momento);
    const indexMusicas = this.musicasRepertorio.indexOf(momento);
    if (indexMomentos >= 0) {
      this.momentos.splice(indexMomentos, 1);
     
    }
    if(indexMusicas >= 0){
      this.musicasRepertorio.splice(indexMusicas, 1);
    }
  }
}
