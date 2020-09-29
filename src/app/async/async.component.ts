import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'async',
  template: `
       <div><code>observable|async</code>: Time: {{ time | async }}</div>
       <div><code>subscription in component.ts</code>: {{test}}</div>
       `
})
export class AsyncComponent {
  time = new Observable<string>(observer => {
    setInterval(() => {
      observer.next(new Date().toString())
    }, 1000);
  });

  test

  constructor(){
    this.time.subscribe((e)=> this.test = e)
  }
}
