import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/userService/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formdata:any;
  hidden:boolean=true;

  
  constructor(private userService:UserServiceService,private snackbar:MatSnackBar) {}

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
        (response:any)=> {console.log(response),
          localStorage.setItem("tokenLogin",response.id),
          this.snackbar.open("Login successfull","close", {
            duration: 1000,
          });
        },
        (error)=>{console.log(error)
          this.snackbar.open(error.statusText ,"close", {
            duration: 1000,
          });
        },
      )
    }
  }

  showPassword() {
    this.hidden=!this.hidden;
  }
}


