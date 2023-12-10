import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nailsstudiofinalfrontend';
  isLoggedIn: any = undefined;

  constructor( public authService: AuthService ) {
  }

  ngOnInit(){
    console.log(this.user)
    if (this.authService.user.hasOwnProperty("role")) {
      this.isLoggedIn= false;
    } else {
      this.isLoggedIn= true;
    }
  }

  get user() {
    return this.authService.user;
  }
}
