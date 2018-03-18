import { Component, OnInit } from '@angular/core';
//auth service
import { AuthService } from '../shared/Auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regDone:boolean;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm)
  {
    this.authService.signup(form.value.username,form.value.email,form.value.password)
    .subscribe(
      response=>{console.log(response),this.regDone=true;},
      error=>{console.log(error),this.regDone=false;}
    );
  }

}
