import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormControl} from '@angular/forms';
import {DataShareServiceService} from '../data-share-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private dataShare:DataShareServiceService) { }
  loginForm = this.fb.group({
    userName: ["", Validators.required],
    password: ["",[ Validators.required, this.requiredNumber]],
  })

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm.value.userName)
    this.dataShare.setLoggedUser(this.loginForm.value.userName)
    console.log(this.loginForm.value.userName)
    this.loginForm.value
  }

  requiredNumber(control:FormControl){
  // console.log(control.value)
  let containNumber: RegExp = /^.*[0-9].*$/;
      if ((control.value == '' || control.value == null) || !(containNumber.test(control.value)) ) {
            return { "number": true };      
      }
      return null;
  }

}