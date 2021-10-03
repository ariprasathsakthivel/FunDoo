import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formdata:any;

  
  constructor(private userService:UserServiceService) {}

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
      (res)=>console.log(res)
    )
  }
}
}
