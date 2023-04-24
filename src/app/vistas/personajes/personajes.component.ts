import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListPersonajesI } from '../../modelos/listPersonajes.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit{

  myName:string = "";
  personajes:ListPersonajesI[]=[];
  personajesById:ListPersonajesI[]=[];
  constructor(private api:ApiService, private router:Router){
    
  }

  ngOnInit(): void {
    
    this.getAllCharacter();
  }

  getAllCharacter(){
    this.api.getAllCharacter().pipe(map((response:any)=>response.results)).subscribe((data:any[]) =>{
      this.personajes = data;
    })
  }

  getCharacterByName(myName:string){
    
    this.api.getCharacterByName(myName).pipe(map((response:any)=>response.results)).subscribe((data:any[]) =>{
      this.personajes = data;
    })
  }


}
