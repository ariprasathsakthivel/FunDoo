import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/userService/user-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  formdata:any;
  hidden:boolean=true;

  
  constructor(private userService:UserServiceService,private snackbar:MatSnackBar) {}

  ngOnInit(): void {
    this.formdata=new FormGroup({
      firstname : new FormControl('', Validators.required),
      lastname : new FormControl('', Validators.required),
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      confirm : new FormControl('', Validators.required)
    });
  }





  onFormSubmit()  {
    if (!this.formdata.invalid){
      let payload={
        firstName: this.formdata.value.firstname,
        lastName: this.formdata.value.lastname,
        email: this.formdata.value.username,
        password: this.formdata.value.password,
        confirmPassword:this.formdata.value.confirm,
        service:"advance"
      }
      this.userService.registerServie(payload).subscribe(
        (next)=>{console.log(next),
          this.snackbar.open("Registration successfull"," ", {
            duration: 1000,
          });
        },
        (error)=>console.log(error)
      )
    }
  }

  showPassword(){
    this.hidden=!this.hidden;
  }

}
