import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseURL=environment.baseUrl;
  token:any;

  constructor( private httpService:HttpServiceService) {
    this.token=localStorage.getItem("token")
   }

  registerServie(payload:any)
  {
    let header={
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
      })
    }
    return this.httpService.postService(this.baseURL+"/user/userSignUp",payload,false,header)
  }
  loginServie(payload:any)
  {
    let header={
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
      })
    }
    return this.httpService.postService(this.baseURL+"/user/login",payload,false,header)
  }
  forgotPasswordService(payload:any)
  {
    let header={
      headers: new HttpHeaders ({
        "Content-Type":"application/json"
      })
    }
    return this.httpService.postService(this.baseURL+"/user/reset",payload,false,header)
  }
  resetPasswordService(payload:any)
  {
    let header={
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
        'Authorization': this.token
      })
    }
    return this.httpService.postService(this.baseURL+"/user/reset-password",payload,true,header)
  }
}
