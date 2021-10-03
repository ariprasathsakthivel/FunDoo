import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor( private http:HttpClient) { }

  postService(url:string,payload:any,header:any)
  {
    return this.http.post(url,payload,header);
  }
}
