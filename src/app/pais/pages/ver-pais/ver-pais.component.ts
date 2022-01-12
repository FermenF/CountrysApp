import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:  Country;

  constructor( 
    private activateRoute: ActivatedRoute, 
    private pasiService: PaisService) {}

  ngOnInit(): void {
    
  this.activateRoute.params
    .pipe(
      switchMap( ({ id }) => this.pasiService.getPaisPorAlpha ( id ))
    ).subscribe( res => this.pais = res);
  }

}
