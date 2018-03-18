import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Headers,Response } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';

import { Ipatient } from '../../Interfaces/ipatient';

@Injectable()
export class PatientsService {
patient:Ipatient[];
  constructor(private http:Http) { }
  getPatients(date:Date): Observable<Ipatient[]>
  {
    return this.http.get('http://localhost/clinic/public/api/getPatients/'+date)
    .map(response=>{return <Ipatient[]>response.json().patients});

  }
  getPatient(id:number): Observable<Ipatient[]>
  {
    return this.http.get('http://localhost/clinic/public/api/getPatient/'+id)
    .map(response=>{return <Ipatient[]>response.json().patient});

  }


}
