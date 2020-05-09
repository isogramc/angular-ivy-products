import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IdFilterPipePipe } from './id-filter-pipe.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, IdFilterPipePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
