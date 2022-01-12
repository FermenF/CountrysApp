import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent{
  
  constructor( private paisService: PaisService){}
  
  termino    : string  = '';
  buscarError: boolean = false;
  paises     : Country[] = [];

  buscar( termino:string ){

    this.buscarError = false;
    this.termino = termino;
    
    this.paisService.buscarCapital( this.termino ).
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
}
