import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { Routes, RouterModule } from '@angular/router';

const routesHeroes: Routes =[
  {
    path: '',
    children:[
      {
        path:'agregar',
        component:AgregarComponent
      },
      {
        path:'buscar',
        component:BuscarComponent
      },
      {
        path:'heroe',
        component:HeroeComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'listado',
        component:ListadoComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesHeroes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
