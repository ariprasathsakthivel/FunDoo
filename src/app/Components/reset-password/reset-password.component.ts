import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  formdata:any;
  hidden:boolean=true;
  token:any;
  constructor( private activeRoute:ActivatedRoute,private userService:UserServiceService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      password : new FormControl('', Validators.required),
      confirm : new FormControl('', Validators.required)
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    localStorage.setItem("token",this.token);
  }




  onFormSubmit()  {
    if (!this.formdata.invalid){
      let payload={
        newPassword:this.formdata.value.password
      }
      this.userService.resetPasswordService(payload).subscribe(
        (response)=>{console.log(response) 
          this.snackbar.open("Password changed successfully","close", {
            duration: 1000,
          });
        },
        (error)=>{console.log(error),
          this.snackbar.open("Unable to change password","close", {
            duration: 1000,
          });
        }
      )
    }
  }

  showPassword(){
    this.hidden=!this.hidden;
  }
}
