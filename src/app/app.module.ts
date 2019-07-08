import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BeersService } from './services/beers.service';
import { FavouritesService } from './services/favourites.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ScrollableDirective } from './directives/scrollable.directive';
import { CartComponent } from './components/cart/cart.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { GoogleAuthComponent } from './components/google-auth/google-auth.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    NavBarComponent,
    FavouritesComponent,
    BeerDetailsComponent,
    LandingPageComponent,
    ScrollableDirective,
    CartComponent,
    OrderFormComponent,
    GoogleAuthComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'beers/:beerId', component: BeerDetailsComponent },
      { path: 'beer-catalogue', component: BeerListComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'user', component: UserComponent },
      { path: ':cart-link', component: CartComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [BeersService, FavouritesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
