import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/User/user.service';
import { Iuser } from '../Interfaces/iuser';
import { AuthService } from '../shared/Auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  user:Iuser[];

  constructor(private userService:UserService,private authservice:AuthService) { }

  ngOnInit() {
    this.userService.getAuthUser().subscribe(data=>{this.user=data;
      console.log(this.user)});

  }

}
