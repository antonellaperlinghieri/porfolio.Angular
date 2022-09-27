import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private ingresar:boolean = false;
  
  constructor() {  }

  public ingresarAplicativo(Obj:any):boolean {
    this.ingresar = Obj.usuario == 'admin' && Obj.password == '1485';
    return this.ingresar;
  }

  public habilitarLogeo() {
    return this.ingresar;
  }
}
