import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-get-all-archive',
  templateUrl: './get-all-archive.component.html',
  styleUrls: ['./get-all-archive.component.scss']
})
export class GetAllArchiveComponent implements OnInit {

  notesToDisplay: any;


  constructor(private notesService:NoteServiceService) { }

  ngOnInit(): void {
    this.displayNotes()
  }


  displayNotes(){
    this.notesService.getArchiveNotes().subscribe(
      (response:any)=>{this.notesToDisplay=response.data.data;
        this.notesToDisplay.reverse();
       console.log("success");
        },
      (error)=>console.log(error)
    );
  }




}
