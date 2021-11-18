import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ArticoloDataService } from './articolo/articolo-data.service';
import { RecensioneComponent } from './recensione/recensione.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    RecensioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticoloDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
