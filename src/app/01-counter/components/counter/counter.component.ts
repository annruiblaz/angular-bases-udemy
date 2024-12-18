import { Component } from "@angular/core";

@Component({ //Decorador q transforma la clase en un componente
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="updateCounter(1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="updateCounter(-1)">-1</button>
    `
    })
export class CounterComponent {
    public counter: number = 0;
  
    updateCounter(value: number):void {
      this.counter +=value;
    }
  
    resetCounter(): void {
      this.counter = 0;
    }
}