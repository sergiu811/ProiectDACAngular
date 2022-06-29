import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {redirectUnauthorizedTo, redirectLoggedInTo, canActivate} from '@angular/fire/auth-guard'
import { DetailsComponent } from './components/details/details.component';


const redirectToLogin = ()=>redirectUnauthorizedTo(['login']);
const redirectToHome = ()=> redirectLoggedInTo(['home']);
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    ... canActivate(redirectToHome)
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ... canActivate(redirectToHome)
  },
  {
    path: 'home',
    component: HomeComponent,
    ... canActivate(redirectToLogin)
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
