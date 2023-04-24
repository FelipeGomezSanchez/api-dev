import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ListLugaresI } from 'src/app/modelos/listLugares.interface';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit{

  lugares:ListLugaresI[]=[];
  lugaresById:ListLugaresI[]=[];
  constructor(private api:ApiService, private router:Router){
  
  }

  ngOnInit(): void {
    
    this.api.getAllLocations().pipe(map((response:any)=>response.results)).subscribe((data:any[]) =>{
      this.lugares = data;
    })
  }

  getLocationById(){
    this.api.getLocationById(1).subscribe((data:any[]) =>{
      this.lugaresById = data;
    })
  }

}
