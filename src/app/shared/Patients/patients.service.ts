import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Headers,Response } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';

import { Ipatient } from '../../Interfaces/ipatient';
import { Data } from '@angular/router/src/config';

@Injectable()
export class PatientsService {
patient:Ipatient[];
message:string;
res:string;
  constructor(private http:Http) { }
  getPatients(date:Date): Observable<Ipatient[]>
  {
    return this.http.get('http://localhost/clinic/public/api/getPatients/'+date)
    .map((response:Response)=>{return <Ipatient[]>response.json().patients});

  }
  getPatientsToday(): Observable<Ipatient[]>
  {
    return this.http.get('http://localhost/clinic/public/api/getPatientsToday')
    .map((response:Response)=>{return <Ipatient[]>response.json().patients});

  }
  getPatient(id:number): Observable<Ipatient[]>
  {
    return this.http.get('http://localhost/clinic/public/api/getPatient/'+id)
    .map((response:Response)=>{return <Ipatient[]>response.json().patient});

  }
  addReservation(name:string,gender:string,age:number,phone:string,
    type:string,paid:number,change:number,card_number:number,date_reservation:Date)
  {
    return this.http.post('http://localhost/clinic/public/api/addReservation',{
      name:name,gender:gender,age:age,phone:phone,
      type:type,paid:paid,change:change,card_number:card_number,date_reservation:date_reservation},
      {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})
      .map(
        (response:Response)=>{
           this.res=response.json().response;
          this.message=response.json().message;
          //this.loggin=true;
         return {response:this.res,message:this.message};
        }
      );

  
  }
  update(name:string,age:number,gender:string,phone:string,
    card_number:number,id:number)
  {
    return this.http.post('http://localhost/clinic/public/api/updatePatient',
  {name:name,age:age,gender:gender,phone:phone,card_number:card_number,id:id},
  {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})
  .map(
    (response:Response)=>{
       this.res=response.json().response;
      //this.loggin=true;
     return {response:this.res};
    }
  );


  }

}
