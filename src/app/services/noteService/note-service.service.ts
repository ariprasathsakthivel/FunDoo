import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  baseURL=environment.baseUrl;
  token:any;

  constructor( private httpService:HttpServiceService) {
    this.token=localStorage.getItem("token")
   }

  createNotes(payload:any)
  {
    let header={
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
        'Authorization': this.token
      })
    }
    return this.httpService.postService(this.baseURL+"/notes/addNotes",payload,true,header)
  }

  getNotes()
  {
    let header={
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
        'Authorization': this.token
      })
    }
    return this.httpService.getService(this.baseURL+"/notes/getNotesList",true,header)
  }

  updateNotes(payload:any)
  {
    let header={
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
        'Authorization': this.token
      })
    }
    return this.httpService.postService(this.baseURL+"/notes/updateNotes",payload,true,header)
  }

  trashNotes(payload:any)
  {
    let header={
      headers: new HttpHeaders ({
        "Content-Type":"application/json",
        'Authorization': this.token
      })
    }
    return this.httpService.postService(this.baseURL+'/notes/trashNotes',payload,true,header)
  }
}
