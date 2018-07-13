import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  /* signInWithEmail(): void {
    this.auth.emailLogin().then(() => this.afterSignIn());
  } */

}
