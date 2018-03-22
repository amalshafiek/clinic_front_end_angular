import { Component, OnInit } from '@angular/core';
import { Ipatient } from '../../Interfaces/ipatient';
import { PatientsService } from'../../shared/Patients/patients.service';
import {ActivatedRoute} from "@angular/router";
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
patient: Ipatient[];
id: number;
sub: any;
is_update:boolean;
  constructor(private patientService:PatientsService,private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.sub=this.activedRoute.params.subscribe(params => {
      this.id = params['id'];} );
      this.patientService.getPatient(this.id).subscribe(data=>{this.patient=data;});

  }
  onUpdatePatient(form:NgForm)
  {
    this.patientService.update(form.value.name,form.value.age,
      form.value.gender,form.value.phone,form.value.card_number,form.value.id)
    .subscribe(
      //for get the token 
      success=>{console.log(success),this.is_update=true},
      error=>{console.log(error),this.is_update=false}
    );
  }

}
