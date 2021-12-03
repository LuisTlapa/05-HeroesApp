import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { LoginComponent } from '../../../auth/pages/login/login.component';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  heroe: Heroe={
    superhero: '',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:''
  }

  publishers = [
  {
    id:'DC Comics',
    desc: 'DC - Comics'
  },
  {
    id:'Marvel Comics',
    desc: 'Marvel - Comics'
  }
]

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }
  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      console.log(this.heroe.superhero);
      
      return
    }

    this.heroesService.agregarHeroe(this.heroe)
      .subscribe( respuesta => {
        console.log('respuesta',  respuesta);
        
      }
    )
    
  }

}
