import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//auth service
import { AuthService } from '../shared/Auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  constructor(private authService:AuthService,private router: Router) {
    
   }

  ngOnInit() {
  }
  onSignin(form: NgForm)
  {
    this.authService.signin(form.value.email,form.value.password)
    .subscribe(
      //for get the token 
      token=>{console.log(token),this.authService.login=true;},
      error=>{console.log(error),this.authService.login=false;}
    );
if(this.authService.is_doctor==0 && this.authService.is_active==1 )
{
    this.router.navigate(["secretary"]);
}
if(this.authService.is_doctor==1 && this.authService.is_active==1)
{
  this.router.navigate(["doctor"]);    
}

}


}
