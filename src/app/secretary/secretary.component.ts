import { Component, OnInit } from '@angular/core';
import { PatientsService } from'../shared/Patients/patients.service';
import { ReservationsService } from'../shared/Reservations/reservations.service';

import { NgForm } from '@angular/forms';
import { Ipatient } from '../Interfaces/ipatient';

import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {
  regDone:boolean;
  patient:Ipatient[];
  sub:any;
  isDeleted:boolean;
  date:Date;
  
 

  constructor(private patientService:PatientsService,private activatedRoute:ActivatedRoute,
  private reservationService:ReservationsService,private router: Router,private location:Location) { }

  ngOnInit() {
    
    this.patientService.getPatientsToday().subscribe(data=>{this.patient=data});
    

  }

  onDeleteReservation(id:number,date:Date)
  {
  
    this.reservationService.delete(id,date).subscribe(
      succsses=>{this.isDeleted=true;},
      error=>{this.isDeleted=false;}
    );
    

  }
  onGetPatients()
  {
    this.sub=this.activatedRoute.params.subscribe(params => {
      this.date = params['date'];} );
      this.patientService.getPatients(this.date).subscribe(data=>{this.patient=data;});   
    
  }
  
  

}
