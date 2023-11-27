import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ResponseServices } from '../interfaces/response-services';
import { environment } from 'src/environments/environment.development';
import { Service } from '../interfaces/service';
import { map, tap } from 'rxjs';


const headers = ''

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // Atributos
  BASE_URL: string = environment.baseUrl;
  headers: HttpHeaders;
  token: string;

  constructor( private http: HttpClient ) { 
    const token = localStorage.getItem( 'token' );
    this.token = token ? token : '';
    this.headers = new HttpHeaders().set( 'X-Token', this.token );
  }

  getAllServices() {
    
    return this.http.get<ResponseServices>( `${ this.BASE_URL }/Services` );
  }

  getServiceById( id: string ) {

    return this.http.get<ResponseServices>( `${ this.BASE_URL }/Services/${ id }`)
      .pipe(
        tap( data => {
          console.log( data );

          return data;
        }),
        map( Service => Service.data )
      );
  }

  createService( data: Service ) {

    return this.http.post<ResponseServices>( 
      `${ this.BASE_URL }/Services`, 
      data, 
      { headers: this.headers } 
    );
  }

  deleteService( id: string ) {

    return this.http.delete(
      `${ this.BASE_URL }/Services/${ id }`,
      { headers: this.headers }
    );
  }

  updateService( id: string, Service: Service  ) {

    console.log( id );

    return this.http.patch(
      `${ this.BASE_URL }/Services/${ id }`,
      Service,
      { headers: this.headers }
    );
  }
}