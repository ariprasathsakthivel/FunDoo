import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';


@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  notesToDisplay:any;
  notes: any;

  
  constructor(private notesService:NoteServiceService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.displayNotes()
  }

  createNoteData($event:any){
    let payload=$event;
    this.notesService.createNotes(payload).subscribe(
      (response:any)=>{console.log(response);
        this.snackbar.open(response.status.message,"close", {
          duration: 1000,
        });
        this.displayNotes();
      },
      (error)=>console.log(error)
    );
  }


  displayNotes(){
    this.notesService.getNotes().subscribe(
      (response:any)=>{this.notes=response.data.data;
        this.notes.reverse();console.log(this.notes);
        this.notesToDisplay=this.notes.filter((element:any)=>{if (!element.isDeleted && !element.isArchived){ return element}});
         console.log("displaynotes called");
        },
      (error)=>console.log(error)
    );
  }

}
