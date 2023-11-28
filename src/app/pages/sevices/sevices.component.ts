import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.css']
})
export class SevicesComponent {
  service: any=[ // si influye la información  que se muestra
    { url: './assets/images/serimagen1.jpg', titulo: 'servicio', price: 60000 },
    { url: './assets/images/serimagen2.jpg', titulo: 'servicio', price: 60000 },
    { url: './assets/images/serimagen3.jpg', titulo: 'servicio', price: 60000 },
    { url: './assets/images/serimagen4.jpg', titulo: 'servicio', price: 60000 },
    { url: './assets/images/serimagen5.jpg', titulo: 'servicio', price: 60000 },
    { url: './assets/images/serimagen6.jpg', titulo: 'servicio', price: 60000 },
    { url: './assets/images/serimagen7.jpg', titulo: 'servicio', price: 60000 },
    { url: './assets/images/serimagen8.jpg', titulo: 'servicio', price: 60000 },
 ];
  
  constructor(
    private serviceService: ServiceService
  ) {
    this.service = this.service.map( (service: any) => {
      service.price1=service.price*2;
      return service
    })
  }
  onInit(){
    //this.service= this.serviceService.service; - para que se llame desde el backend
  }
}
