import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor( private http:HttpClient) { }

  postService(url:string,payload:any,token:boolean=false,header:any=null)
  {
    return this.http.post(url,payload,token && header);
  }

  getService(url:string,token:boolean=false,header:any=null)
  {
    return this.http.get(url,token && header);
  }

}
