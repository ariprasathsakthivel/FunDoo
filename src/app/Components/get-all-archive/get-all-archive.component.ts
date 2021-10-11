import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-get-all-archive',
  templateUrl: './get-all-archive.component.html',
  styleUrls: ['./get-all-archive.component.scss']
})
export class GetAllArchiveComponent implements OnInit {

  notesToDisplay: any;
  notes: any;


  constructor(private notesService:NoteServiceService) { }

  ngOnInit(): void {
    this.displayNotes()
  }


  displayNotes(){
    this.notesService.getArchiveNotes().subscribe(
      (response:any)=>{this.notes=response.data.data;
        this.notes.reverse();console.log(this.notes);
        this.notesToDisplay=this.notes.filter((element:any)=>{if (element.isArchived){ return element}});
         console.log("displaynotes called");
        },
      (error)=>console.log(error)
    );
  }




}
