import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter: number = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
    // if (this.counter < 0) {
    //   this.counter = 0; // Prevent negative values
    // }
  }
  reset() {
    this.counter = 0;
  }
  getCounterState() {
    if (this.counter === 0) {
      return 'neutral';
    } else if (this.counter > 0) {
      return 'positive';
    } else {
      return 'negative';
    }
  }
}
