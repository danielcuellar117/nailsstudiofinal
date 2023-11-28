import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  items = [ //lo que hago aquí no afecta nada
    { url: './assets/images/serimagen1.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen2.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen3.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen4.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen5.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen6.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen7.jpg', titulo: 'servicio', price: 60, price1: 80 },
    { url: './assets/images/serimagen8.jpg', titulo: 'servicio', price: 60, price1: 80 },
 ]
  constructor() {

    this.items = this.items.map( item => {
      item.price1=item.price*2;
      return item
    })
    console.log(this.items);
   }

   get services() {
    return { ...this.items }
   }
}
