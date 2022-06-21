import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { EmailAuthCredential } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email] ),
    password: new FormControl('',Validators.required),
  });

  constructor(private authService :AuthenticationService, private router: Router , private toast:HotToastService ) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }
  submit() {

    if (!this.loginForm.valid) {
      return;
    }
    const email:string=this.loginForm?.get('email')?.value as string;
    const password:string=this.loginForm?.get('password')?.value as string;
    //const { email, password } = this.loginForm.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in successfully',
        loading: 'Logging in...',
        error: ({ message }) => `There was an error: ${message} `
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    })

  }

}
