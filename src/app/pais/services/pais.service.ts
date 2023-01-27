import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { Capital } from '../interfaces/capital.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v2';
  constructor(private http:HttpClient) { }

  BuscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  BuscarCapital(termino:string):Observable<Country[]>{  
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Capital[]>(url);
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

  BuscarRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/regionalbloc/${ region }`;
    return this.http.get<Country[]>(url);
  }
}
