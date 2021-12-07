import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login()
    .subscribe(respuesta=>{
      if (respuesta.id){
        console.log(respuesta);
        
        this.router.navigate(['./heroes'])
      }
      
    })
    
  }

}
