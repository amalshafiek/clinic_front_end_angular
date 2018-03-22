import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Headers,Response } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';

@Injectable()
export class DoctorsService {

  constructor(private http:Http) { }
   //signup
   addSecretary(username:string,email:string,password:string)
   {
    
    return this.http.post('http://localhost/clinic/public/api/addSecretary',{
       name:username,email:email,password:password},
   {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})});
     
    
   }

}
