import { Component, OnInit, Input } from '@angular/core';
import { Musica } from 'src/app/interfaces/musica.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-repertorios',
  templateUrl: './repertorios.component.html',
  styleUrls: ['./repertorios.component.css']
})
export class RepertoriosComponent implements OnInit {

  @Input() musicasRepertorio: Musica[];
  
  
  constructor(private fb: FormBuilder) { }


  formNovoRepertorio = this.fb.group({
    titulo: ['', Validators.required],
    dataEvento: ['', Validators.required]
  });

  ngOnInit() {
    
  }

}
