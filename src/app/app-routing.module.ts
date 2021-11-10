import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login/components/register/register.component';
import { SigninComponent } from './login/components/signin/signin.component';

const routes: Routes = [
  { 
    path: 'signin',
    loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule) 
  },
  { 
      path: 'dashboard',
      loadChildren: ()=> import('./pagina/pagina.module').then(m=>m.PaginaModule) 
  },
  { path: '**',
   redirectTo: 'signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
