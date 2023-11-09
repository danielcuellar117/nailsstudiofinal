import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('menu') menu!: ElementRef;

  ngAfterViewInit() {
    // You can access/call the public methods
    console.log( this.menu );
 }
}
