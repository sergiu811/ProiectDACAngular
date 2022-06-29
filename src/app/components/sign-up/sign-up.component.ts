import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

export function passwordMatchValidator():ValidatorFn{
  return (control:AbstractControl): ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !==confirmPassword)
    {
      return {
        passwordsDontMatch:true
      }
    }
    return null;
  }
}

export class CustomValidators{

  public static humanName(control:FormControl){
      
      const regularExpression = new RegExp("^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$")

      return regularExpression.test(control.value)?null:{"not-human-name": true}
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm= new FormGroup({
    name: new FormControl('', [Validators.required,CustomValidators.humanName]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  },{validators:passwordMatchValidator()})
  usersService: any;

  constructor(private authService:AuthenticationService, private toast:HotToastService, private router:Router) { }

  ngOnInit(): void {
  }
  get name(){
    return this.signupForm.get('name');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get confirmPassword(){
    return this.signupForm.get('confirmPassword');
  }
  submit(){
    if (!this.signupForm.valid) {
      return;
    }

    const name:string=this.signupForm?.get('name')?.value as string;
    const email:string=this.signupForm?.get('email')?.value as string;
    const password:string=this.signupForm?.get('password')?.value as string;
    this.authService
      .signUp(email, password)
      .pipe(
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing up...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }}

