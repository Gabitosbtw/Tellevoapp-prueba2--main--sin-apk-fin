import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.page.html',
  styleUrls: ['./si.page.scss'],
})
export class SiPage implements OnInit {
  numero: number | undefined;
  cantidad: number | undefined;
  propina: number | undefined;
  resultadoDinero: number | null = null;
  resultadoPropina: number | null = null;

  ngOnInit() {
  }

  calcularDinero() {
    if (this.numero !== undefined && this.cantidad !== undefined) {
      this.resultadoDinero = this.numero * this.cantidad;
    } else {
      this.resultadoDinero = null;
    }
  }

  calcularPropina() {
    if (this.numero !== undefined && this.cantidad !== undefined && this.propina !== undefined) {
      const totalSinPropina = this.numero * this.cantidad;
      const totalPropina = totalSinPropina * (this.propina / 100);
      this.resultadoPropina = totalSinPropina + totalPropina;
    } else {
      this.resultadoPropina = null;
    }
  }
}

  
