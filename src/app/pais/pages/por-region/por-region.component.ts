import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
    margin-right:5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false;
  constructor(private paisService: PaisService) { }

  getClassCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises =[];
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.BuscarRegion(termino)
      .subscribe((Country) => { this.paises = Country;
      }, (err) => {
        this.hayError = true;
      });
  }
  sugerencias(termino: string) {
    this.hayError = false;
  }
}
