import { Component, OnInit } from '@angular/core';
import { Ipatient } from '../Interfaces/ipatient';
import { PatientsService } from'../shared/Patients/patients.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patient:Ipatient[];
  date:Date;
  sub:any;
    constructor(private patientService:PatientsService,private activateRoute:ActivatedRoute) { }
  
    ngOnInit() {
      this.sub = this.activateRoute.params.subscribe(params => {
        this.date = params['date'];} );
      this.patientService.getPatients(this.date).subscribe(data=>{this.patient=data});
  
    }

}
