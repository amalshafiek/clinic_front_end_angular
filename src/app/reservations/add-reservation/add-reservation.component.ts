import { Component, OnInit } from '@angular/core';
import { PatientsService } from'../../shared/Patients/patients.service';
import { ReservationsService } from'../../shared/Reservations/reservations.service';

import { NgForm } from '@angular/forms';
import { Ipatient } from '../../Interfaces/ipatient';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  isUpdate:boolean;
  constructor(private patientService:PatientsService,private router: Router) { }

  ngOnInit() {
  }
  onAdd(form: NgForm)
  {
    this.patientService.addReservation(form.value.name,form.value.age,form.value.type,
      form.value.paid,form.value.change,form.value.date_reservation,
      form.value.gender,form.value.phone,form.value.card_number)
    .subscribe(
      //for get the token 
      success=>{console.log(success),this.isUpdate=true;},
      error=>{console.log(error),this.isUpdate=false;}
    );
 
  }

}
