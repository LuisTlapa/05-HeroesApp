import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../pages/interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario: Auth | undefined;

  get usuario():Auth{ // Este es anivel global y se puede usar en todos lados
    return {...this._usuario!}
  }

  constructor(private http: HttpClient) { }

  verificarAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false)
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map(usuario => {
          console.log('map',usuario);
          this._usuario = usuario
          return true
          
        })
      );

  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(respuesta => this._usuario = respuesta ),
        tap(respuesta => localStorage.setItem('token',respuesta.id) ) // almacena el id en local astorage
      );
  }
}
