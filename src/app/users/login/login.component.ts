import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm= new FormGroup(
      {email: new FormControl('badia@gmail'),
       password: new FormControl()}
    )
  }
  verifyLogin(){
    //email, psw
  }

}
