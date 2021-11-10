import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async login(email: string, password: string){
    try{
      return await this.auth.signInWithEmailAndPassword(email, password);

    }catch(error){
      console.log("Error de logueo", error);
      return null;
    }
  }

  async register(email: string, password: string){
    try{
      return await this.auth.createUserWithEmailAndPassword(email, password);

    }catch(error){
      console.log("Error de registro", error);
      return null;
    }
  }

  getUserLogged(){
    return this.auth.authState;
  }

  logout(){
    this.auth.signOut;
  }  

}
