// tslint:disable:variable-name
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Musica } from 'src/app/interfaces/musica.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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

  //@Input() musicasRepertorio: any[]; 

  @Output() qtdGroupSetListsEvent = new EventEmitter<number>();
  @Output() needToClearSelection = new EventEmitter<boolean>();
  clearCommand = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [COMMA, ENTER];
  momentos = [];
  grupo: Grupo;
  grupoSetLists: Setlist[] = [];
  tituloRepertorio = "Novo Repertório";
  ehEdicao: boolean;
  setlistEdicao: Setlist;
  copiaSetlistEdicao: Setlist;
  grupoSetlistsOriginal: any[];

  //setList: any[] = this.musicasRepertorio;
  constructor(    
    private fb: FormBuilder, 
    private repertorioService: RepertoriosService,
    private _adapter: DateAdapter<any>,
    private shareService: NgNavigatorShareService) {
      
      this.instanciateSetlistEdicao();
  }


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
      this.grupoSetLists.sort((a, b) => (new Date(a.dataEvento) > new Date(b.dataEvento)) ? 1 : -1);
      
      this.qtdGroupSetListsEvent.emit(this.grupoSetLists.length);

    }, error => {
      alert("Falha ao obter setlists");
    });
  }


  criarRepertorio(){
    let repertorio: Setlist = {
      id: this.setlistEdicao.id !== '' ? this.setlistEdicao.id : this.grupo.id + "_" + generateId(),
      idGrupo: this.setlistEdicao.idGrupo !== '' ? this.setlistEdicao.idGrupo : this.grupo.id,
      tituloEvento: this.formNovoRepertorio.value.titulo.toString(),
      dataEvento: this.formNovoRepertorio.value.dataEvento.toString(),
      items: this.setlistEdicao.items 
    };
    console.log("REPERTORIO", repertorio);
    this.repertorioService.createSetlist(this.grupo, repertorio).then(res => {     
      this.musicasRepertorio = [];
      console.log(repertorio);

      this.instanciateSetlistEdicao();
      this.tituloRepertorio = "Novo Repertório";
      this.formNovoRepertorio.reset();
      let mensagemSucesso = "Repertório criado com sucesso!";
      if (this.ehEdicao){
        this.ehEdicao = false;
        mensagemSucesso = "Repertório atualizado com sucesso!";
      }
      alert(mensagemSucesso);

    }).catch(error => {
      alert("Deu errado! :(");
      console.log(error);
    });
    
  }

  cancelarCriacaoRepertorio(){
    this.clearCommand = true;
    this.needToClearSelection.emit(Object.assign({}, this.clearCommand));
   
    this.musicasRepertorio = [];
    this.momentos = [];
    this.formNovoRepertorio.reset();

    if(this.ehEdicao){
      console.log("this.copiaSetlistEdicao.items cancelamento",  this.copiaSetlistEdicao.items);
      this.setlistEdicao.items = this.copiaSetlistEdicao.items; // = this.itemsOriginaisEdicao; 
      console.log(" this.setlistEdicao apos reatribuicao de items",   this.setlistEdicao);
      this.grupoSetLists = this.grupoSetlistsOriginal;
      console.log(this.grupoSetLists);
      this.ehEdicao = false;     
    }
    this.instanciateSetlistEdicao();
    
    this.clearCommand = false;
  }

  excluirMusica(item){
    
    let indexToDelete = this.setlistEdicao.items.indexOf(item);
    this.setlistEdicao.items.splice(indexToDelete, 1);
    this.needToClearSelection.emit(Object.assign({}, this.clearCommand));

  }
  

  podeEditarSetlist(setlist: Setlist){
    let hoje = new Date();
    console.log("setlist.dataEvento", setlist.dataEvento.toString());
    console.log("hoje", hoje);
    console.log(new Date(setlist.dataEvento.toString()) >= hoje);
    return new Date(setlist.dataEvento.toString()) >= hoje;
  }

  editarSetlist(setlist: Setlist){
    if(this.podeEditarSetlist(setlist) === false){
      alert("Não é possível editar a lista de um evento passado");
      return;
    }
    this.ehEdicao = true;
    this.grupoSetlistsOriginal = JSON.parse(JSON.stringify(this.grupoSetLists));
    // this.setlistEdicao = JSON.parse(JSON.stringify(setlist));
    // this.setlistEdicao.items = setlist.items;    
    
    Object.assign(this.setlistEdicao, setlist);
    this.copiaSetlistEdicao = JSON.parse(JSON.stringify(setlist));
    console.log("this.copiaSetlistEdicao", this.copiaSetlistEdicao);
    
    this.tituloRepertorio = "Editar Repertório";
    // console.log("Editar setlist", setlist)
    this.momentos = setlist.items.filter(i => !i.nome);
    // this.musicasRepertorio = setlist.items;

    window.scroll(0, 0);
    this.formNovoRepertorio.setValue({
      titulo: setlist.tituloEvento,
      dataEvento: new Date(setlist.dataEvento),
      momentos:[]
    });         
   
  }

  @Input()
  set musicasRepertorio(musicasLista){    
    console.log("Musicas recebidas da lista: ", musicasLista);
    if(this.ehEdicao){
      musicasLista.forEach(musica => {
        this.setlistEdicao.items.push(musica);
      });
      return;
    }
    this.setlistEdicao.items = musicasLista;
  }

  instanciateSetlistEdicao(){
    this.setlistEdicao = {
      id: '',
      dataEvento: null,
      idGrupo: '',
      tituloEvento: '',
      items: []
    };

    this.copiaSetlistEdicao = {
      id: '',
      dataEvento: null,
      idGrupo: '',
      tituloEvento: '',
      items: []
    };
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
      this.setlistEdicao.items.unshift(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(momento: string): void {
    const indexMomentos = this.momentos.indexOf(momento);
    const indexMusicas = this.setlistEdicao.items.indexOf(momento);
    if (indexMomentos >= 0) {
      this.momentos.splice(indexMomentos, 1);
     
    }
    if(indexMusicas >= 0){
      this.setlistEdicao.items.splice(indexMusicas, 1);
    }
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
}
