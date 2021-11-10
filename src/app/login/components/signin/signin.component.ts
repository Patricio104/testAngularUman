import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {

  myLoginForm: FormGroup = this.fb.group({
    email: ['test@gmail.com',[Validators.required, Validators.email]],
    password: ['1234567',[Validators.required, Validators.minLength(7)]]
  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private auth: AuthService) { }

  login(){
    console.log(this.myLoginForm.value);
    const { email, password }= this.myLoginForm.value;
    this.auth.login(email, password).then(res =>{
      console.log("Usuario logueado", res);
      if(res===null){
        console.log("No logueado");
        window.alert("Usuario o contraseña incorrecto!!!")
      }else{
        this.router.navigateByUrl('/dashboard');
      }
    })
    
  }

}
