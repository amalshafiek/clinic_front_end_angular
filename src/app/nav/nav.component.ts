import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/Auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }
  loggedIn()
  {
    if(this.authService.login==true)
    {
      return true;
    }
    else{
      return false;
    }
  }
  onLogout()
  {
    this.authService.logout();
    this.router.navigate(['']);
    return false;
  }

}
