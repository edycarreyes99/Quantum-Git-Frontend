import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.FIREBASE_CONFIG)),
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    {
      provide: FIREBASE_OPTIONS, useValue: environment.FIREBASE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
