import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl

  constructor(private http:HttpClient) { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroePorId(id: string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)

  }
}
