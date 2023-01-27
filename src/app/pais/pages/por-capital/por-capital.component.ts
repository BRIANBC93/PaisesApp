import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  capitales: Capital[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.BuscarCapital(termino)
      .subscribe((capital) => {
        console.log(capital);
        this.capitales = capital;
      }, (err) => {
        this.hayError = true;
        this.capitales= [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}
