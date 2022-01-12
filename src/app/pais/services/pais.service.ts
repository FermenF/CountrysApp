import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  constructor( private http: HttpClient) { }

  private apiUrl :string = 'https://restcountries.com/v2';

  buscarPais ( termino:string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino:string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url);
  }

  buscarPorContinente( termino:string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ termino }`;
    return  this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( id:string ): Observable<Country>{
    const url = `${ this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

}
