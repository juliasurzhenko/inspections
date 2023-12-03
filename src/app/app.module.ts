import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { FormsModule } from '@angular/forms';
import { remult } from 'remult';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(zone: NgZone){
    remult.apiClient.wrapMessageHandling = (handler) =>
    zone.run(() => handler());
  }
 }
