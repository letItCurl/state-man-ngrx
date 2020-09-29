import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { AsyncComponent } from './async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer, counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
