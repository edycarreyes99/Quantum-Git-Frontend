import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import {CURRENT_USER_LS, GITHUB_ACCESS_TOKEN_LS} from "../../../core/constants/local-storage.constants";
import {User} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {
  }

  // Method to log in with firebase and the custom provider
  firebaseSocialLogin(provider: firebase.auth.GithubAuthProvider_Instance): Promise<firebase.User> {
    return new Promise<firebase.User>(async (resolve, rejects) => {
      this.angularFireAuth.signInWithPopup(provider).then(async (res: firebase.auth.UserCredential) => {
        if (res.user) {
          localStorage.setItem(CURRENT_USER_LS, JSON.stringify(res.user));
          localStorage.setItem(GITHUB_ACCESS_TOKEN_LS, JSON.parse(JSON.stringify(res.credential?.toJSON())).accessToken);
          await this.router.navigate(['repos']);
          resolve(res.user);
        } else {
          console.error('User does not exists');
          rejects();
        }
      }).catch((error) => {
        console.error('Error doing login with GitHub:', error);
        rejects(error);
      })
    });
  }

  // Method to create the GitHub provider and login with firebase
  gitHubLogin(): Promise<firebase.User> {
    return new Promise<firebase.User>(async (resolve, rejects) => {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('repo');
      await this.firebaseSocialLogin(provider)
        .then((user) => resolve(user))
        .catch((error) => {
          rejects(error);
        });
    });
  }

  // Method to do log out
  async logout(): Promise<void> {
    await this.angularFireAuth.signOut();
    await localStorage.clear();
    await sessionStorage.clear();
    location.reload();
  }

  // Method to get the current user
  getCurrentUserFromFirebase(): User | undefined {
    const userData = localStorage.getItem(CURRENT_USER_LS);
    return userData ? JSON.parse(userData ?? '') : null;
  }

  // Method to get the current user JWT
  public getCurrentUserJwtToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.authState.subscribe({
        next: async (user) => {
          if (user) {
            const token = await user.getIdToken(true);
            resolve(token);
          }
        },
        error: (error) => {
          console.error('Error fetching user JWT', error);
          reject(error);
        }
      });
    });
  }

  public getCurrentGitHubUserAccessToken(): string {
    return localStorage.getItem(GITHUB_ACCESS_TOKEN_LS) ?? '';
  }
}
