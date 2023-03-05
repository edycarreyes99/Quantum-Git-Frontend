import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.FIREBASE_CONFIG))
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
