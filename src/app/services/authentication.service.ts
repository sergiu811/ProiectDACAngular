import { Injectable } from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword} from '@angular/fire/auth'
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$=authState(this.auth);

  constructor(private auth:Auth ) { }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  logOut()
  {
    return from(this.auth.signOut())
  }

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }


}