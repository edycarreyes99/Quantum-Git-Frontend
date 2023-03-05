import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {
  }

  firebaseSocialLogin(provider: firebase.auth.GithubAuthProvider_Instance): Promise<firebase.User> {
    return new Promise<firebase.User>(async (resolve, rejects) => {
      this.angularFireAuth.signInWithPopup(provider).then((res) => {
        if (res.user) {
          localStorage.setItem('CURRENT_USER', JSON.stringify(res.user));
          console.log('User logged in is:', res.user);
          resolve(res.user);
        } else {
          console.error('User does not exists');
        }
      }).catch((error) => {
        console.error('Error doing login with GitHub:', error);
      })
    });
  }

  gitHubLogin(): Promise<firebase.User> {
    return new Promise<firebase.User>(async (resolve, rejects) => {
      const provider = new firebase.auth.GithubAuthProvider();
      await this.firebaseSocialLogin(provider).then((user) => resolve(user)).catch((error) => rejects(error));
    });
  }
}
