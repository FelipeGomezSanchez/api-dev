import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {ListPersonajesI} from '../../modelos/listPersonajes.interface'
import { ListLugaresI } from 'src/app/modelos/listLugares.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://rickandmortyapi.com/api/";

  constructor(private http:HttpClient) { }

  getAllCharacter():Observable<ListPersonajesI[]>{
    let direccion = this.url + "character";
    return this.http.get<ListPersonajesI[]>(direccion);
  }

  getCharacterByName(name:string):Observable<ListPersonajesI[]>{
    let direccion = this.url + "character/?name="+name;
    return this.http.get<ListPersonajesI[]>(direccion);
  }

  getAllLocations():Observable<ListLugaresI[]>{
    let direccion = this.url + "location";
    return this.http.get<ListLugaresI[]>(direccion);
  }

  getLocationById(id:number):Observable<ListLugaresI[]>{
    let direccion = this.url + "location/"+id;
    return this.http.get<ListLugaresI[]>(direccion);
  }

}
