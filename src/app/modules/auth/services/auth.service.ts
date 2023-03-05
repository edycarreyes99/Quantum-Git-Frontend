import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import {CURRENT_USER_LS, GITHUB_ACCESS_TOKEN_LS} from "../../../core/constants/local-storage.constants";

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
      this.angularFireAuth.signInWithPopup(provider).then(async (res: firebase.auth.UserCredential) => {
        if (res.user) {
          localStorage.setItem(CURRENT_USER_LS, JSON.stringify(res.user));
          localStorage.setItem(GITHUB_ACCESS_TOKEN_LS, JSON.parse(JSON.stringify(res.credential?.toJSON())).accessToken);

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
      provider.addScope('repo');
      await this.firebaseSocialLogin(provider).then((user) => resolve(user)).catch((error) => rejects(error));
    });
  }

  async logout(): Promise<void> {
    await this.angularFireAuth.signOut();
    await localStorage.clear();
    await sessionStorage.clear();
    location.reload();
  }
}
