import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/service';

import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/services/services.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-Services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  // Atributos: Son la forma en que los datos van a estar disponibles para desplegarse en la View Componente
  services!: Service[];

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
      this.services = data.data;
    });
  }


  // Ciclos de vida

  // Metodos

}

