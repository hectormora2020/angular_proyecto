import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { 
  }

  getData() {
    //return this.http.get( 'https://api.sampleapis.com/countries/countries' );
    return this.http.get( 'https://cat-fact.herokuapp.com/facts' );
  }
}
