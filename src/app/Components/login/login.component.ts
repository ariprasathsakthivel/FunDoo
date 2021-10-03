import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formdata:any;
  hidden:boolean=true;

  
  constructor(private userService:UserServiceService) {}

  ngOnInit(): void {
    this.formdata=new FormGroup({
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required),
    });
  }




  onFormSubmit()  {
    if (!this.formdata.invalid){
      let payload={
        email: this.formdata.value.username,
        password:this.formdata.value.password
      };
      this.userService.loginServie(payload).subscribe(
        (response:any)=> {console.log(response);
        localStorage.setItem("token",response.id)})
    }
  }

  showPassword() {
    this.hidden=!this.hidden;
  }
}


