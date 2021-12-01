import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(heroe:Heroe): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
