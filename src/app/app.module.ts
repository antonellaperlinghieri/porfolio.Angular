import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaYeducacionComponent } from './componentes/experiencia-yeducacion/experiencia-yeducacion.component';
import { HardYSoftskillsComponent } from './componentes/hard-y-softskills/hard-y-softskills.component';
import { MisproyectosComponent } from './componentes/misproyectos/misproyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PorfolioService } from './servicios/porfolio.service';
import {HttpClientModule} from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PofolioComponent } from './componentes/pofolio/pofolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';



const routes: Routes = [
 {path:'', component:PofolioComponent},
 {path: 'iniciar-sesion', component:IniciarSesionComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaYeducacionComponent,
    HardYSoftskillsComponent,
    MisproyectosComponent,
    FooterComponent,
    IniciarSesionComponent,
    PofolioComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
