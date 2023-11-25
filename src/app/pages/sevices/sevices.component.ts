import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.css']
})
export class SevicesComponent {
  products: any=[];
  
  constructor(
    private serviceService: ServiceService
  ) {}
  onInit(){
    this.products= this.serviceService.products;
  }
}
