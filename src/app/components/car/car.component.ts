import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  carrito: any = [];
  total: any = 0;

  constructor( private carritoService: CarritoService ){

  }
  ngOnInit(){
    this.car();
  }
  closeCariito(){
    this.carritoService.$modal.emit(false)
  }
  car(){
    this.carrito = localStorage.getItem('shoppingCart')
    this.carrito = JSON.parse(this.carrito)

    for (let i = 0; i < this.carrito.length; i++) {
      this.carrito[i].price *= this.carrito[i].count;
      this.carrito[i].quantity -= this.carrito[i].count;
      this.total += this.carrito[i].price;
    }
    console.log(this.carrito);


  }

}
