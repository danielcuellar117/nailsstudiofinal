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
export class ServicesComponent implements OnInit {
  // Atributos: Son la forma en que los datos van a estar disponibles para desplegarse en la View Componente
  Services!: Service[];

  // Constructor: public, private, proteted
  constructor( 
    private http: HttpClient,
    private ServiceService: ServiceService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.ServiceService.getAllServices().subscribe( data => {
      console.log( data );    // { ok: true, data: [] }
      this.Services = data.data;
    });
  }


  // Ciclos de vida

  // Metodos
  update( id: string ) {
    this.router.navigateByUrl( `/dashboard/Services/update/${ id }` );
  }

  remove( id: string ) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas seguro?",
      text: "Esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Eliminalo",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Eliminado!",
          text: "Tu Servicio ha sido eliminado.",
          icon: "success"
        });

          this.ServiceService.deleteService( id ).subscribe( data => {
            console.log( data );

            this.loadData();
          });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          icon: "error"
        });
      }
    });

  }

}
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
