import { Component, OnInit, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
expanded:boolean=false;
title:any;
note:any;
data:any;
  constructor() {}

  ngOnInit(): void {
  }

  @Output() dataEvent=new EventEmitter<string[]>()
 
  expand(){
    if (!this.expanded){
      this.expanded=!this.expanded;
    }
  }


  close(){
    if (this.expanded){
      this.expanded=!this.expanded;
      this.data={"title":this.title,"description":this.note};
      this.dataEvent.emit(this.data);
      this.title="";
      this.note="";
    }
  }
}
