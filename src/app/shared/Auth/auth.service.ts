import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Headers,Response } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  login:boolean;
  is_doctor:number;
  is_active:number;
  
  constructor(private http:Http) {
    this.login=false;
   }
   //signup
   signup(username:string,email:string,password:string)
   {
    
    return this.http.post('http://localhost/clinic/public/api/client',{
       name:username,email:email,password:password},
   {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})});
     
    
   }

   //signin
   signin(email:string,password:string)
   {
     
     return this.http.post('http://localhost/clinic/public/api/client/signin',{
      email:email,password:password},
   {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})
   .map(
     (response:Response)=>{
       const token=response.json().token;
       this.is_doctor=response.json().is_doctor;
       this.is_active=response.json().is_active;
       this.login=true;
      return {token:token,is_doctor:this.is_doctor,is_active:this.is_active};
     }
   ).do(
     tokenValue=>{
       //save the token in localeStorage
       localStorage.setItem('token',tokenValue.token);

       
     }                 
   );
   
   }

   getToken()
   {
     return localStorage.getItem('token');
   }
   logout()
   {
    localStorage.removeItem('token');
    this.login=false;
    return false;
   }


   
 

}
