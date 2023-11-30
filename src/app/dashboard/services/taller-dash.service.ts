import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ResponseTalleres } from 'src/app/interfaces/response-talleres';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TallerDashService {

  BASE_URL: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  createTaller( inputDataForm: AbstractControl) {
    const data = inputDataForm.value;

    return this.http.post( `${ this.BASE_URL }/talleres`, data );
  }

  getAllTalleres() {
    return this.http.get<ResponseTalleres>( `${ this.BASE_URL }/talleres` );
  }

  deleteTaller( id: string ) {

    return this.http.delete(`${ this.BASE_URL }/talleres/${ id }`);
  }
}
