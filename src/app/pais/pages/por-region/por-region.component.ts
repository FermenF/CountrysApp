import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  continentes: string[] = ['africa','americas','asia','europe', 'oceania'];
  continenteActivo: string = '';
  paises     : Country[] = [];
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  activarContinente( region: string ){
    
    if( region === this.continenteActivo){
      return;
    }
    this.continenteActivo = region;
    this.paisService.buscarPorContinente( region )
      .subscribe(res =>{
        this.paises = res;
      });
  }
}
