import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string): Promise<any> {
    this.auth.signInWithEmailAndPassword(email, password);
    return Promise.resolve();
  }

  getUser() {
    /* authState is an BIG_ Object, which is return by the firebase if there is a SUCCESSFUL SIGN-IN */
    return this.auth.authState;
  }

  signOut() {
    this.auth.signOut();
  }
}
