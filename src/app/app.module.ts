import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {SettingsComponent} from './settings/settings.component';
import {SuccessComponent} from './success/success.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthGuard} from './_core/auth.guard';
import {NavComponent} from './components/nav/nav.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {LogoutSpinnerComponent} from './components/logout-spinner/logout-spinner.component';
import {PersonalDataComponent} from './personal-data/personal-data.component';
import {BackNavComponent} from './components/back-nav/back-nav.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ChangeUsernameComponent} from './change-username/change-username.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HttpInterceptorService} from './http-interceptor.service';
import {CheckoutComponent} from './checkout/checkout.component';
import {CheckoutLoadingComponent} from './checkout-loading/checkout-loading.component';
import {ButtonComponent} from './components/button/button.component';
import {CreditCardDirectivesModule} from 'angular-cc-library';
import {PaymentOverviewComponent} from './payment-overview/payment-overview.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BottomSheetComponent} from './components/bottom-sheet/bottom-sheet.component';
import {ProductGridComponent} from './components/product-grid/product-grid.component';
import {faArrowLeft, faArrowRight, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {PwaService} from './services/pwa.service';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

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
    ButtonComponent,
    LogoutSpinnerComponent,
    PersonalDataComponent,
    BackNavComponent,
    BottomSheetComponent,
    SearchResultsComponent,
    ChangeUsernameComponent,
    ProductDetailComponent,
    CheckoutComponent,
    CheckoutLoadingComponent,
    ButtonComponent,
    PaymentOverviewComponent,
    BottomSheetComponent,
    ProductGridComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CreditCardDirectivesModule,
    FontAwesomeModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthGuard,
    PwaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PwaService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faArrowRight, faArrowLeft, faSignOutAlt);
  }
}
