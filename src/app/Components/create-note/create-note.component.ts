import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
expanded:boolean=false;
title:any;
note:any;
  constructor() { }

  ngOnInit(): void {
  }

  expand(){
    if (!this.expanded){
      this.expanded=!this.expanded;
    }
  }


  close(){
    if (this.expanded){
      this.expanded=!this.expanded;
      console.log(this.title,this.note);
    }
  }
}
