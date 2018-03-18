import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Headers,Response } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  register:boolean;
  loggin:boolean;
  constructor(private http:Http) {
    this.loggin=false;
    this.register=false;
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
     //this.login=true;
     return this.http.post('http://localhost/clinic/public/api/client/signin',{
      email:email,password:password},
   {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})
   .map(
     (response:Response)=>{
       const token=response.json().token;
       this.loggin=response.json().loggin;
       //this.loggin=true;
      return {token:token,loggin:this.loggin};
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


   
 

}
