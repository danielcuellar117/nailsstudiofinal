import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  imagenes = [
    { url: './assets/images/store/piedras.jpg', titulo: 'Piedras', descripcion: 'hermosas piedras para tus uñas' },
    { url: './assets/images/store/piedras2.jpg', titulo: 'Piedras', descripcion: 'hermosas piedras para tus uñas' },
    { url: './assets/images/store/piedras3.jpg', titulo: 'Piedras', descripcion: 'hermosas piedras para tus uñas' },
    { url: './assets/images/store/piedras4.jpg', titulo: 'Piedras', descripcion: 'hermosas piedras para tus uñas' },
    { url: './assets/images/store/pinceles.jpg', titulo: 'Pinceles', descripcion: 'pinceles doble punta' },
    { url: './assets/images/store/pinceles2.jpg', titulo: 'Pinceles', descripcion: 'pinceles doble punta' },
    { url: './assets/images/store/pinceles3.jpg', titulo: 'Pinceles', descripcion: 'pinceles doble punta' },
    { url: './assets/images/store/pinceles4.jpg', titulo: 'Pinceles', descripcion: 'pinceles doble punta' },
    { url: './assets/images/store/esmalte1.jpg', titulo: 'esmaltes', descripcion: 'esmaltes masglo npm' },
    { url: './assets/images/store/esmalte2.jpg', titulo: 'Pinceles', descripcion: 'esmaltes masglo npm' },
    { url: './assets/images/store/esmalte3.jpg', titulo: 'Pinceles', descripcion: 'esmaltes masglo npm' },
    { url: './assets/images/store/esmalte4.jpg', titulo: 'esmaltes', descripcion: 'esmaltes masglo npm' },
  ];

}
