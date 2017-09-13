import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LoginService } from './login.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {
  currentUserId: string;
  authStatus: boolean;
  currentUser: string;
  userName: any;

  error: any;

  constructor(
    private _loginService: LoginService,
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
  }


  fetchUserDetails() {
    this.authStatus = this._loginService.authenticated;
    this.currentUser = this._loginService.currentUserDisplayName;
    this.currentUserId = this._loginService.currentUserId;
  }

  loginWithGoogle() {
    this._loginService.googleLogin();
  }

  loginWithFacebook() {
    this._loginService.facebookLogin();
  }

  signOut() {
    this._loginService.signOut();
  }


}
