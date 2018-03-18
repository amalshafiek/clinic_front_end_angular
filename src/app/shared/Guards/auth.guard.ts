import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authservice.loggin==true)
      {
        this.router.navigate(['user']);
        
        return true;
      }
      else{
        this.router.navigate([""]);
        return false;
      }
  }
}
