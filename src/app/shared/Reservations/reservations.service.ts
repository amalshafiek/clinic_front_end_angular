import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Headers,Response } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import { Ireservation } from '../../Interfaces/ireservation';




@Injectable()
export class ReservationsService {
reservation:Ireservation;
  constructor(private http:Http) { }
  delete(id:number,date:Date)
  {
    return this.http.delete('http://localhost/clinic/public/api/deleteReservation/'+id+'/'+date)
    .map((response:Response)=>{return response.json().response}); 

  }
  reservationDetails(id:number):Observable<Ireservation>
  {
    return this.http.get('http://localhost/clinic/public/api/reservationDetails/'+id)
    .map((response:Response)=>{return response.json()});

  }

}
