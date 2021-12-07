import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncSubject } from 'rxjs';
import { AuthService } from '../../../auth/service/auth.service';
import { Auth } from '../../../auth/pages/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get auth(){ // obtener el usuario
    return this.authService.usuario;
  }

  constructor(private router:Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['./auth'])
  }

}
