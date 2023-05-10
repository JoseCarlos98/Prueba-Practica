import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaPracticaComponent } from './prueba-practica.component';

describe('PruebaPracticaComponent', () => {
  let component: PruebaPracticaComponent;
  let fixture: ComponentFixture<PruebaPracticaComponent>;
  let compilado : HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaPracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compilado = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // NUMEROS PRIMOS 
  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 1', () => {
    const cantidadPrimos = 1;
    const numerosPrimosEsperados = { primos: [2, 3], nEsimo: 3 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });

  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 2', () => {
    const cantidadPrimos = 2;
    const numerosPrimosEsperados = { primos: [2, 3, 5], nEsimo: 5 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });
  
  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 3', () => {
    const cantidadPrimos = 3;
    const numerosPrimosEsperados = { primos: [2, 3, 5, 7], nEsimo: 7 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });
 
  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 4', () => {
    const cantidadPrimos = 4;
    const numerosPrimosEsperados = { primos: [2, 3, 5, 7, 11], nEsimo: 11 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });
  
  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 5', () => {
    const cantidadPrimos = 5;
    const numerosPrimosEsperados = { primos: [2, 3, 5, 7, 11, 13], nEsimo: 13 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });
  
  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 6', () => {
    const cantidadPrimos = 6;
    const numerosPrimosEsperados = { primos: [2, 3, 5, 7, 11, 13, 17], nEsimo: 17 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });

  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 7', () => {
    const cantidadPrimos = 7;
    const numerosPrimosEsperados = { primos: [2, 3, 5, 7, 11, 13, 17, 19], nEsimo: 19 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });
  
  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 8', () => {
    const cantidadPrimos = 8;
    const numerosPrimosEsperados = { primos: [2, 3, 5, 7, 11, 13, 17, 19, 23], nEsimo: 23 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });
  
  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 9', () => {
    const cantidadPrimos = 9;
    const numerosPrimosEsperados = { primos: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29], nEsimo: 29 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });
  
  test('Debería devolver un objeto con un arreglo de números primos y el n-ésimo primo con el número 10', () => {
    const cantidadPrimos = 10;
    const numerosPrimosEsperados = { primos: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31], nEsimo: 31 };
    const numerosPrimosObtenidos = component.obtenerNumerosPrimos(cantidadPrimos);
    
    expect(numerosPrimosObtenidos).toEqual(numerosPrimosEsperados);
  });

  // MULTIPLOS DE 3 
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 1', () => {
    const cantidadPrimos = 1;
    const numerosMultiplosEsperados = { multiplos: [3], nEsimo: 3 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });

  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 2', () => {
    const cantidadPrimos = 2;
    const numerosMultiplosEsperados = { multiplos: [3, 6], nEsimo: 6 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });
 
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 3', () => {
    const cantidadPrimos = 3;
    const numerosMultiplosEsperados = { multiplos: [3, 6, 9], nEsimo: 9 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });
 
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 4', () => {
    const cantidadPrimos = 4;
    const numerosMultiplosEsperados = { multiplos: [3, 6, 9, 12], nEsimo: 12 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });
 
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 5', () => {
    const cantidadPrimos = 5;
    const numerosMultiplosEsperados = { multiplos: [3, 6, 9, 12, 15], nEsimo: 15 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });
 
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 6', () => {
    const cantidadPrimos = 6;
    const numerosMultiplosEsperados = { multiplos: [3, 6, 9, 12, 15, 18], nEsimo: 18 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });
 
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 7', () => {
    const cantidadPrimos = 7;
    const numerosMultiplosEsperados = { multiplos: [3, 6, 9, 12, 15, 18, 21], nEsimo: 21 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });
 
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 8', () => {
    const cantidadPrimos = 8;
    const numerosMultiplosEsperados = { multiplos: [3, 6, 9, 12, 15, 18, 21, 24], nEsimo: 24 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });
  
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 9', () => {
    const cantidadPrimos = 9;
    const numerosMultiplosEsperados = { multiplos: [3, 6, 9, 12, 15, 18, 21, 24, 27], nEsimo: 27 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });
  
  test('Debería devolver un objeto con un arreglo de numeros múltiplo de 3 y n-ésimo múltiplo de 3 con el número 10', () => {
    const cantidadPrimos = 10;
    const numerosMultiplosEsperados = { multiplos: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], nEsimo: 30 };
    const numerosMultiplosObtenidos = component.obtenerMultiplosDeTres(cantidadPrimos);

    expect(numerosMultiplosObtenidos).toEqual(numerosMultiplosEsperados);
  });

});
