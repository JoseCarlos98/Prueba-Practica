import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-prueba-practica',
  templateUrl: './prueba-practica.component.html',
  styleUrls: ['./prueba-practica.component.scss']
})
export class PruebaPracticaComponent implements OnInit, OnDestroy {
  onDestroy = new Subject<void>();

  resultado: any
  numerosPrimos:Number[] = [];

  constructor() { }

  ngOnInit(): void { }

  obtenerResultados(valor:any) {
    this.numerosPrimos = this.obtenerNumerosPrimos(valor);
    this.resultado = {
      primos: this.obtenerNumerosPrimos(valor),
      multiplosDeTres: this.obtenerMultiplosDeTres(valor)
    };
  }

  obtenerNumerosPrimos(cantidadPrimos: number) {
    let actualPosicion = 3;
    const numerosPrimos: any  = {
      primos: [2],
      nEsimo: null
    };

    while (numerosPrimos.primos.length < cantidadPrimos + 1) {
      let esPrimo = true;

      for (let i = 0; i < numerosPrimos.primos.length; i++) {
        if (actualPosicion % numerosPrimos.primos[i] === 0) {
          esPrimo = false;
          break;
        }
      }

      if (esPrimo) numerosPrimos.primos.push(actualPosicion);
      actualPosicion += 2;
    }

    numerosPrimos.nEsimo = numerosPrimos.primos[numerosPrimos.primos.length - 1];
    
    return numerosPrimos;
  }

  obtenerMultiplosDeTres(cantidadMultiplos: number) {
    let multiplo = 3;
    const numerosMultiplos: any  = {
      multiplos: [],
      nEsimo: null
    };

    while (numerosMultiplos.multiplos.length < cantidadMultiplos) {
      if (multiplo % 3 === 0) numerosMultiplos.multiplos.push(multiplo);
      multiplo += 3;
    }

    numerosMultiplos.nEsimo = numerosMultiplos.multiplos[numerosMultiplos.multiplos.length - 1];

    return numerosMultiplos;
  }
 
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}
