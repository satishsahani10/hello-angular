import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: Login;
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor
    (
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.loginModel = new Login('', '');
  }
  ngOnInit() {
  }
  onLogin() {
    console.log(this.loginModel);
    this.loggedIn.next(true);
    this.router.navigate(['/home']);
    localStorage.setItem("IsLogin", "true");
  }
  logout() {                            // {4}
    this.loggedIn.next(false);
    localStorage.removeItem("IsLogin");
    this.router.navigate(['/login']);
  }
}
