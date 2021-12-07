import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor ( private authService: AuthService,
                private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificarAutenticacion().pipe(
        tap(estaAutenticado => {
          if(!estaAutenticado){
            this.router.navigate(['./auth/login'])
          }
        })
      )

      /*if(this.authService.usuario.id){
        console.log('Usuario exitoso: ', this.authService.usuario.usuario);
        return true
      }
      console.log('Bloqueado por el AuthGuard- canActivate');
      */
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | boolean  {

      return this.authService.verificarAutenticacion().pipe(
        tap(estaAutenticado => {
          if(!estaAutenticado){
            this.router.navigate(['./auth/login'])
          }
        })
      )
     /* if(this.authService.usuario.id){
        console.log('Usuario exitoso: ', this.authService.usuario.usuario);
        return true
      }
      console.log('Bloqueado por el AuthGuard - canLoad'); */
      
   // return false;
  } // siempre regesa true siempre  // deja pasar a todos
}
