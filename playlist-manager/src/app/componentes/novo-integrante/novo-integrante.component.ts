import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-novo-integrante',
  templateUrl: './novo-integrante.component.html',
  styleUrls: ['./novo-integrante.component.css']
})
export class NovoIntegranteComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  participacoes = ["Violão", "Guitarra", "Baixo", "Bateria", "Teclado", "Vocal", "Percussão", "Piano", "Saxofone", 
  "Tropete", "Trobone", "Violino", "Violoncelo", "Cavaco", "Cajon", "Outro"];

  
  formNovoMembro = this.fb.group({
    nome: ['', Validators.required],
    email_membro: ['', [Validators.email, Validators.required]],
    participacao: ['', Validators.required],
    outro:''
  });
  

  ngOnInit() {
    

  }

}
