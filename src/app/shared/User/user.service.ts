import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Headers,Response } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';

import { Iuser } from '../../Interfaces/iuser';
import { AuthService } from '../Auth/auth.service';

@Injectable()
export class UserService {

  constructor(private http:Http,private authSer:AuthService) { }
  getAuthUser():Observable<Iuser[]>
  {
    const token=this.authSer.getToken();
    return this.http.get('http://localhost/clinic/public/api/client/getAuthUser?token='+token)
    .map(response => { return <Iuser[]>response.json()})
  }

}
