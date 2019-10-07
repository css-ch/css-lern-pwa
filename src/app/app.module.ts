import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { SuccessComponent } from './success/success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AuthGuard} from './_core/auth.guard';
import { NavComponent } from './components/nav/nav.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {LogoutSpinnerComponent} from './components/logout-spinner/logout-spinner.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBYlCWINMXHIIpZ94hq4nSAA9WQoFLhXlU',
  authDomain: 'pwa-bay.firebaseapp.com',
  databaseURL: 'https://pwa-bay.firebaseio.com',
  projectId: 'pwa-bay',
  storageBucket: 'pwa-bay.appspot.com',
  messagingSenderId: '236042061338',
  appId: '1:236042061338:web:34a50c8e6aec0232'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    SettingsComponent,
    SuccessComponent,
    ShoppingCartComponent,
    NavComponent,
    ToolbarComponent,
    LogoutSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
