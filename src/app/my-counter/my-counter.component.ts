import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, fuck } from '../counter.actions';
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
 
  increment() {
    console.log(this.store)
    this.store.dispatch(increment());
  }
 
  decrement() {
    console.log(this.store)
    this.store.dispatch(decrement());
  }
 
  reset() {
    console.log(this.store)
    this.store.dispatch(reset());
  }

  fuck() {
    console.log(this.store)
    this.store.dispatch(fuck());
  }
}