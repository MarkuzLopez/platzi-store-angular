import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularAuth: AngularFireAuth) { }

  createUser(email: string, password: string ) { 
    return this.angularAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string ) {
    return this.angularAuth.signInWithEmailAndPassword(email, password)
  }

  logOut() { 
    return this.angularAuth.signOut();
  }

  hasUser() { 
    return this.angularAuth.authState;
  }
}
