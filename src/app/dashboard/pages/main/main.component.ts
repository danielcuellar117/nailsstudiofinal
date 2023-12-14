import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  menuVariable: boolean= false;
  menu_icon_variable: boolean=false;

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable= !this.menu_icon_variable;
  }
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  // Getters
  get user() {
    return this.authService.user;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
    window.location.reload();
  }

}
