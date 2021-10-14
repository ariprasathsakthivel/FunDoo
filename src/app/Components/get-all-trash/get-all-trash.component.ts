import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-get-all-trash',
  templateUrl: './get-all-trash.component.html',
  styleUrls: ['./get-all-trash.component.scss']
})
export class GetAllTrashComponent implements OnInit {

  notesToDisplay: any;
  notes: any;


  constructor(private notesService:NoteServiceService) { }

  ngOnInit(): void {
    this.displayNotes()
  }
  
  displayNotes(){
    this.notesService.getTrashNotes().subscribe(
      (response:any)=>{this.notes=response.data.data;
        this.notes.reverse();console.log(this.notes);
        this.notesToDisplay=this.notes.filter((element:any)=>{if (element.isDeleted && element.isArchived){ return element}});
         console.log("displaynotes called");
        },
      (error)=>console.log(error)
    );
  }



}
