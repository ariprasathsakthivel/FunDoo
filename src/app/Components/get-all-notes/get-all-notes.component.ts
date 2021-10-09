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

  
  constructor(private notesService:NoteServiceService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.displayNotes()
  }

  createNoteData($event:any){
    let payload=$event;
    this.notesService.createNotes(payload).subscribe(
      (response:any)=>{console.log(response),
        this.snackbar.open(response.status.message,"close", {
          duration: 1000,
        })
      },
      (error)=>console.log(error)
    );
    this.displayNotes();
  }


  displayNotes(){
    this.notesService.getNotes().subscribe(
      (response:any)=>{this.notesToDisplay=response.data.data;
        this.notesToDisplay.reverse(), console.log("displaynotes called");
        },
      (error)=>console.log(error)
    );
  }
}
