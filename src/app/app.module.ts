import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCoreModule  } from '@angular2-material/core';
import { MdInputModule  } from '@angular2-material/input';
import { MdSliderModule } from '@angular2-material/slider';
import { MdCardModule } from '@angular2-material/card';
import { AppComponent } from './app.component';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdCoreModule,
    MdSliderModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
