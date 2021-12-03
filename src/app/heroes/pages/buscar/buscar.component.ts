import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { LoginComponent } from '../../../auth/pages/login/login.component';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino:string="";
  heroes: Heroe[] = []
  heroeSelccionado : Heroe | undefined

  constructor( private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroeService.getSugerencias(this.termino.trim())
    .subscribe(heroes => this.heroes = heroes)
  }
  opcionSeleccionada(event:any){
    if(!event.option.value){
      this.heroeSelccionado = undefined
      console.log('no hay valor');
      return;
      
    }
    const heroe: Heroe = event.option.value
    this.termino = heroe.superhero
    
  this.heroeService.getHeroePorId(heroe.id!)
  .subscribe(heroe => this.heroeSelccionado = heroe)
  }

}
