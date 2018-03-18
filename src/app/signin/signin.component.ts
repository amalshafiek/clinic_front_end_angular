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
  logDone:boolean;
  constructor(private authService:AuthService,private router: Router) {
    
   }

  ngOnInit() {
  }
  onSignin(form: NgForm)
  {
    this.authService.signin(form.value.email,form.value.password)
    .subscribe(
      //for get the token 
      tokenData=>{console.log(tokenData),this.logDone=true;},
      error=>{console.log(error),this.logDone=false;}
    );

    
    //to o to signup 
    //this.router.navigate(["signup"]);
    
  }


}
