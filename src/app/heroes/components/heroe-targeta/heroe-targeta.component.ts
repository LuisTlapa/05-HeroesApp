import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {
  
  @Input() heroe!:Heroe

  constructor() { }

  ngOnInit(): void {
  }

}
