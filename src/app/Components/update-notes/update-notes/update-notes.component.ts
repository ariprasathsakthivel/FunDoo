import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';


@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title:any;
  description:any;
  updatedData:any;

  
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private noteService:NoteServiceService) { }

  ngOnInit(): void {
    this.title=this.data.element.title;
    this.description=this.data.element.description;
    console.log(this.title);
    
   }
  


  close(){

    this.data={"title":this.title,"description":this.description,"noteId":this.data.element.id};
    this.noteService.updateNotes(this.data).subscribe((response)=>console.log(response),(error)=>console.log(error));
    
  }
}
