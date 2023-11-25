import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  items = [ 
    { url: './assets/images/piedras.jpg', titulo: 'Piedras', price: 60, price1: 0 },
    { url: './assets/images/piedras2.jpg', titulo: 'Piedras', price: 60 },
    { url: './assets/images/piedras3.jpg', titulo: 'Piedras', price: 60 },
    { url: './assets/images/piedras4.jpg', titulo: 'Piedras', price: 60 },
    { url: './assets/images/pinceles.jpg', titulo: 'Pinceles', price: 60 },
    { url: './assets/images/pinceles2.jpg', titulo: 'Pinceles', price: 60 },
    { url: './assets/images/pinceles3.jpg', titulo: 'Pinceles', price: 60 },
    { url: './assets/images/pinceles4.jpg', titulo: 'Pinceles', price: 60 },
    { url: './assets/images/esmalte1.jpg', titulo: 'esmaltes', price: 60 },
 ]
  constructor() {

    this.items = this.items.map( item => {
      item.price1=item.price*2;
      return item
    })
    console.log(this.items);
   }

   get products() {
    return { ...this.items }
   }
}
