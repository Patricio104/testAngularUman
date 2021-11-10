import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {


  myRegisterForm: FormGroup = this.fb.group({
    name: ['Tu nombre', [Validators.required]],
    email: ['test@gmail.com',[Validators.required, Validators.email]],
    password: ['1234567',[Validators.required, Validators.minLength(7)]]
  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private signin: AuthService) { }

  register(){
    console.log(this.myRegisterForm.value);
    const { email, password }= this.myRegisterForm.value;
    this.signin.register(email, password).then(res =>{
      console.log("Usuario registrado", res);
    })
    this.router.navigateByUrl('/dashboard');
  }

}
