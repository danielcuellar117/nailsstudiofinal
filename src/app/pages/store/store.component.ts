import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  imagenes = [
    { url: './assets/images/piedras.jpg', titulo: 'Piedras', descripcion: 'Descripción 1' },
    { url: './assets/images/piedras2.jpg', titulo: 'Piedras', descripcion: 'Descripción 2' },
    { url: './assets/images/piedras3.jpg', titulo: 'Piedras', descripcion: 'Descripción 3' },
    { url: './assets/images/piedras4.jpg', titulo: 'Piedras', descripcion: 'Descripción 1' },
    { url: './assets/images/pinceles.jpg', titulo: 'Pinceles', descripcion: 'Descripción 2' },
    { url: './assets/images/pinceles2.jpg', titulo: 'Pinceles', descripcion: 'Descripción 3' },
    { url: './assets/images/pinceles3.jpg', titulo: 'Pinceles', descripcion: 'Descripción 1' },
    { url: './assets/images/pinceles4.jpg', titulo: 'Pinceles', descripcion: 'Descripción 2' },
    { url: './assets/images/esmalte1.jpg', titulo: 'esmaltes', descripcion: 'Descripción 3' },
  ];

}
