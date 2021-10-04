import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formdata:any;

  
  constructor(private userService:UserServiceService,private snackbar:MatSnackBar) {}

  ngOnInit(): void {
    this.formdata=new FormGroup({
      username : new FormControl('', [Validators.required, Validators.email]),
    });
  }




  onFormSubmit()  {
    if (!this.formdata.invalid){
    let payload={
      "email":this.formdata.value.username
    };
    this.userService.forgotPasswordService(payload).subscribe(
      (response)=>{console.log(response) 
        this.snackbar.open("A link to reset the password has been send to your email","close", {
          duration: 1000,
        });
      },
      (error)=>{console.log(error),
        this.snackbar.open("You're not registered","close", {
          duration: 1000,
        });
      }
    )
  }
}
}
