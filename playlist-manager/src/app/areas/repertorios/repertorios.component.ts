import { Component, OnInit, Input } from '@angular/core';
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
@Component({
  selector: 'app-repertorios',
  templateUrl: './repertorios.component.html',
  styleUrls: ['./repertorios.component.css']
})
export class RepertoriosComponent implements OnInit {

  @Input() musicasRepertorio: any[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [COMMA, ENTER];
  momentos = [];
  grupo: Grupo;
  grupoSetLists: Setlist[] = [];
  //setList: any[] = this.musicasRepertorio;
  constructor(    
    private fb: FormBuilder, 
    private repertorioService: RepertoriosService) { }


  formNovoRepertorio = this.fb.group({
    titulo: ['', Validators.required],
    dataEvento: ['', Validators.required],
    momentos: ['']
  });

  ngOnInit() {
    this.grupo = JSON.parse(localStorage.getItem('grupo'));
    this.repertorioService.getSetLists(this.grupo).subscribe(setlists => {
      this.grupoSetLists = setlists as Setlist[];
      this.grupoSetLists.sort((a, b) => (a.dataEvento > b.dataEvento) ? 1 : -1);
      console.log("SETLISTS", this.grupoSetLists);
    }, error => {
      alert("Falha ao obter setlists");
    });
  }


  criarRepertorio(){
    let repertorio: Setlist = {
      id: this.grupo.id + "_" + generateId(),
      idGrupo: this.grupo.id,
      tituloEvento: this.formNovoRepertorio.value.titulo.toString(),
      dataEvento: this.formNovoRepertorio.value.dataEvento,
      items: this.musicasRepertorio     
    };
    console.log("REPERTORIO", repertorio);
    this.repertorioService.createSetlist(this.grupo, repertorio).then(res => {
      //this.grupoSetLists.unshift(repertorio);
      //alert("Repertório criado com sucesso");
      this.musicasRepertorio = [];
      console.log(repertorio);
    }).catch(error => {
      alert("Deu errado! :(");
      console.log(error);
    });
    
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
