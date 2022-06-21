import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proiect';
  constructor(public authservice: AuthenticationService, private router:Router){
  }
  logout() {
    this.authservice.logOut().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
