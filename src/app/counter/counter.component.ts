import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,  // onpush es que no queremoa zonejs
})
export class CounterComponent {


  public contador = 10;

  contadorSignal = signal(10);
  edad = signal(25);

  // señales computadas
  mensaje = computed( () => {

    // SE actualizan siempre que en el cuerpo de la funcion aparezca alguna señal implicada
    
    return `Hola ya tienes ${this.contadorSignal()} valores`;
  })


  constructor() {
    // setInterval(() => {
    //   this.contador = this.contador + 1;
    //   console.log('Estoy en el set Interval');
    // }, 2000);
  }


  incrementar( valor: number ) {

    this.contador = this.contador + valor;

    // CAmbiar valor de una señal
    // menos usada -- this.contadorSignal.set( this.contadorSignal() + 1 );

    this.contadorSignal.update( ( currentValue  ) => currentValue +1  );

  }


  // usando señales.
  reset() {

    this.contador = 0;
    
    this.contadorSignal.set(0);
    //this.contadorSignal.update( () => 0);

  }

}
