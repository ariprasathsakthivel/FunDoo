import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { UpdateNotesComponent } from '../update-notes/update-notes/update-notes.component';

@Component({
  selector: 'app-add-collaborator',
  templateUrl: './add-collaborator.component.html',
  styleUrls: ['./add-collaborator.component.scss']
})
export class AddCollaboratorComponent implements OnInit {

  users:any;
  usersList:any;
  search:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog,private userService:UserServiceService) {
   }

  ngOnInit(): void {
    console.log(this.data);
    
    
  }


  ToUpdate(){
    const dialogRef = this.dialog.open(UpdateNotesComponent,{
      width: '100%',
      height: "fit-content",
      data: {
        element:this.data.element
      }
    });
    console.log("element for passing",this.data);
    

    dialogRef.afterClosed().subscribe(() => {
      console.log('updatenotes closed');
    });
  }

  Users(){
    console.log("called");
    let payload={
      "searchWord":this.search
    };
    
    this.userService.searchUser(payload).subscribe((response) => { this.users = response ; this.usersList=this.users.data.details; console.log("email",this.usersList)}
    )
  }


  //   let data = {
  // "searchWord": this.values
// }
}
