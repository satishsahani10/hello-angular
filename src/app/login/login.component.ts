import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: Login;
  constructor(private route: ActivatedRoute) {
    this.loginModel = new Login('', '');
  }
  ngOnInit() {
  }
  onLogin(){
    console.log(this.loginModel);
  }
}
