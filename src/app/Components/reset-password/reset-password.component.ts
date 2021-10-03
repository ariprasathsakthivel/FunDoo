import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  formdata:any;
  hidden:boolean=true;
  
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      password : new FormControl('', Validators.required),
      confirm : new FormControl('', Validators.required)
    });
  }


  onFormSubmit()  {
    if (!this.formdata.invalid){
      let payload={
        newPassword:this.formdata.value.password
      }
      this.userService.resetPasswordService(payload).subscribe(
        (response)=>console.log(response)
      )
  }
  }

  showPassword(){
    this.hidden=!this.hidden;
  }
}
