import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  confirm = new FormControl('', Validators.required);
  

  constructor() {}

  ngOnInit(): void {  
  }
}
