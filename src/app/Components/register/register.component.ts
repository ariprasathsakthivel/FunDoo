import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  formdata:any;
  hidden:boolean=true;

  
  constructor(private userService:UserServiceService) {}

  ngOnInit(): void {
    this.formdata=new FormGroup({
      firstname : new FormControl('', Validators.required),
      lastname : new FormControl('', Validators.required),
      username : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required),
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
        service:"xyz"
      }
      this.userService.registerServie(payload).subscribe(
        (next)=>console.log(next)
      )
    }
  }

  showPassword(){
    this.hidden=!this.hidden;
  }

}
