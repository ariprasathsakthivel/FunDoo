import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthGuardServiceService } from '../services/AuthGuardService/auth-guard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private Authguardservice:AuthGuardServiceService,private router:Router){}
  canActivate (): boolean {
      if (!this.Authguardservice.getToken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.Authguardservice.getToken();
  } 
  
}
