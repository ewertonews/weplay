import { Component, OnInit, Input } from '@angular/core';
import { Musica } from 'src/app/interfaces/musica.model';
import { FormBuilder, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
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
  //setList: any[] = this.musicasRepertorio;
  constructor(private fb: FormBuilder) { }


  formNovoRepertorio = this.fb.group({
    titulo: ['', Validators.required],
    dataEvento: ['', Validators.required],
    momentos: ['']
  });

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression   
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
      this.momentos.push(value.trim());
      this.musicasRepertorio.push(value.trim());
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
