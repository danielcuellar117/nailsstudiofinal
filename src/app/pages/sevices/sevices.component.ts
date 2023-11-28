import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/service';

import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/services/services.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-Services',
  templateUrl: './Sevices.component.html',
  styleUrls: ['./Sevices.component.css']
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
