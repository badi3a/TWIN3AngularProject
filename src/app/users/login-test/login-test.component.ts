import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css']
})
export class LoginTestComponent implements OnInit {
  public formLogin: FormGroup
  constructor() { }
  ngOnInit(): void {
    this.formLogin= new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required])
      }
    )
  }
  verifyLogin(){
    console.log(this.formLogin.value.email);
    console.log(this.formLogin.value.password);
    //cnx backend
  }

}
