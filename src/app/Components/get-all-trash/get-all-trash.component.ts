import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-get-all-trash',
  templateUrl: './get-all-trash.component.html',
  styleUrls: ['./get-all-trash.component.scss']
})
export class GetAllTrashComponent implements OnInit {

  notesToDisplay: any;


  constructor(private notesService:NoteServiceService) { }

  ngOnInit(): void {
    this.displayNotes()
  }
  
  displayNotes(){
    this.notesService.getTrashNotes().subscribe(
      (response:any)=>{this.notesToDisplay=response.data.data;
      this.notesToDisplay.reverse()},
      (error)=>console.log(error)
    );
  }

}
