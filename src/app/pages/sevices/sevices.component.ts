import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.css']
})
export class SevicesComponent {
  service: any=[
    { url: './assets/images/piedras.jpg', titulo: 'Piedras', price: 60, price1: 0 },
    { url: './assets/images/piedras2.jpg', titulo: 'Piedras', price: 60 },
    { url: './assets/images/piedras3.jpg', titulo: 'Piedras', price: 60 },
    { url: './assets/images/piedras4.jpg', titulo: 'Piedras', price: 60 },
    { url: './assets/images/pinceles.jpg', titulo: 'Pinceles', price: 60 },
    { url: './assets/images/pinceles2.jpg', titulo: 'Pinceles', price: 60 },
    { url: './assets/images/pinceles3.jpg', titulo: 'Pinceles', price: 60 },
    { url: './assets/images/pinceles4.jpg', titulo: 'Pinceles', price: 60 },
    { url: './assets/images/esmalte1.jpg', titulo: 'esmaltes', price: 60 },
  ];
  
  constructor(
    private serviceService: ServiceService
  ) {}
  onInit(){
    //this.service= this.serviceService.service; - para que se llame desde el backend
  }
}
