import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {SearchComponent} from './search/search.component';
import {SuccessComponent} from './success/success.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {SettingsComponent} from './settings/settings.component';
import {AuthGuard} from './_core/auth.guard';
import {PersonalDataComponent} from './personal-data/personal-data.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {ChangeUsernameComponent} from './change-username/change-username.component';
import {LogoutSpinnerComponent} from './components/logout-spinner/logout-spinner.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CheckoutLoadingComponent} from './checkout-loading/checkout-loading.component';
import {PaymentOverviewComponent} from './payment-overview/payment-overview.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'search', component: SearchComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'personal-data', component: PersonalDataComponent},
  {path: 'search-results', component: SearchResultsComponent},
  {path: 'change-username', component: ChangeUsernameComponent},
  {path: 'logout-spinner', component: LogoutSpinnerComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'checkout-loading', component: CheckoutLoadingComponent},
  {path: 'payment-overview', component: PaymentOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
