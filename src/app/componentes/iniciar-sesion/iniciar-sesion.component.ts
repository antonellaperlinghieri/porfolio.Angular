import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, NgForm, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { AuthService } from 'src/app/auth.service';
import { NgForOfContext } from '@angular/common';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  constructor( ) {  }



  ngOnInit(): void {
    
  }

login (form:NgForm) {
  const email = form.value.email;
  const password = form.value.password;
}

  
}
