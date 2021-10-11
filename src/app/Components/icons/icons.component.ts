import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  isDeleted:any=false;
  isArchived:any=false;
  path:any;

  @Input() note:any;

  @Output() displayRefresh=new EventEmitter();

  constructor(private notesService:NoteServiceService,private route:Router,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.pathFind()
  }


  pathFind(){  
      console.log(this.routes.url.subscribe((res)=>this.path=res[0].path));
  }



  TrashNote(){
    console.log(this.note.id);
    
    let payload ={
      noteIdList: [this.note.id],
      isDeleted: !this.isDeleted,
      isArchived: false
      
    }
    this.notesService.trashNotes(payload).subscribe(
      (response)=>{console.log("trashing-->",response);this.displayRefresh.emit();},
      (error)=>console.log(error)
    )  
  }



  ArchiveNotes(){
    console.log(this.note.title);

    let payload={
      noteIdList: [this.note.id],
      isDeleted: this.isDeleted,
      isArchived: !this.isArchived,
    }
    this.notesService.archiveNotes(payload).subscribe(
      (response)=>{console.log(response);this.displayRefresh.emit()},
      (error)=>console.log(error)
    )

    
  }

  color(colorhash: any){
    let payload={
      color: colorhash,
      noteIdList: [this.note.id],
    }
    this.notesService.changeColorNotes(payload).subscribe(
      (response)=>{console.log("color changed");this.displayRefresh.emit()},
      (error)=>console.log(error)
      
      
    )
  }
}
