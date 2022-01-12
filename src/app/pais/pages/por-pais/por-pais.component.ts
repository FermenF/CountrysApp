import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})

export class PorPaisComponent{

  constructor( private paisService: PaisService){}
  
  termino         : string  = '';
  buscarError     : boolean = false;
  paises          : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugeridos: boolean = false;

  buscar( termino:string ){

    this.buscarError = false;
    this.termino = termino;
    
    this.paisService.buscarPais( this.termino ).
      subscribe({
        next: (res) => {
          if(!res[0]){
            this.buscarError = true;
          }else{
            this.paises = res;
          }
        },
        error: (err) => {
          this.buscarError = true;
          this.paises = [];
        },
      });
  }

  sugerencias( termino:string ){
    this.buscarError = false;
    this.termino = termino;
    this.mostrarSugeridos = true;

    this.paisService.buscarPais( termino )
      .subscribe({
        next: res => {
          if(!res[0]){
            this.paisesSugeridos = []
          }else{
          this.paisesSugeridos = res.splice(0,5);
          }
        },
        error: err => this.paisesSugeridos = [],
      });
  }

  buscarSugerido( termino:string ){
    this.buscar( termino );
  }
}
