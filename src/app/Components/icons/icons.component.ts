import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() note:any;

  constructor(private notesService:NoteServiceService) { }

  ngOnInit(): void {
  }


  TrashNote(){
    console.log(this.note.id);
    
    let payload ={
      noteIdList: [this.note.id],
      isDeleted: true
    }
    this.notesService.trashNotes(payload).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
      

    )

    
    
  }
}
