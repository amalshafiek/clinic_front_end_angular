import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/User/user.service';
import { Iuser } from '../Interfaces/iuser';
import { DoctorsService } from'../shared/Doctors/doctors.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  add:boolean;
  user:Iuser[];
  constructor(private userService:UserService,private doctorService:DoctorsService) {
    
   }
    ngOnInit() {
      this.userService.getAuthUser().subscribe(data=>{this.user=data;
        console.log(this.user[0]['name'])});
  }
  onAddSecretary(form: NgForm)
  {
   
      this.doctorService.addSecretary(form.value.username,form.value.email,form.value.password)
      .subscribe(
        response=>{console.log(response),this.add=true;},
        error=>{console.log(error),this.add=false;}
      );
    }
  

}
