import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.css']
})
export class SevicesComponent {
  service: any=[ 
    { url: './assets/images/serimagen1.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen2.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen3.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen4.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen5.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen6.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen7.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen8.jpg', titulo: 'servicio', price: 60, price1: 80 },
 ];
  
  constructor(
    private serviceService: ServiceService
  ) {}
  onInit(){
    //this.service= this.serviceService.service; - para que se llame desde el backend
  }
}
