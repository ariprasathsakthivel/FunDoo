import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes/update-notes.component';



@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {


  @Input() notesdata:any;


  
  constructor(public dialog: MatDialog) { 
  }

  @Output() displayEvent=new EventEmitter()



  ngOnInit(): void { }
  

  openDialog(element:any) {
    const dialogRef = this.dialog.open(UpdateNotesComponent,{
      width: '100%',
      height: "fit-content",
      data: {
        element:element
      }
    });
    console.log("display",element);
    

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
      this.displayEvent.emit();
    });
  }

  displayRefresh(){
    console.log("display refresh called");
    
    this.displayEvent.emit()
  }



}
