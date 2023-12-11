import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nailsstudiofinalfrontend';
<<<<<<< HEAD

=======
>>>>>>> e7d08ac62ebf582ac269fe14274c05dac6fefb7a
  isLoggedIn: any = undefined;

  constructor( public authService: AuthService ) {
    
    if (this.authService.user.hasOwnProperty("role")) {
      this.isLoggedIn= false;
    } else {
      this.isLoggedIn= true;
    }
  }

  ngOnInit(){
  }

  get user() {
    return this.authService.user;
  }
}
