import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BeersService } from './services/beers.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BeerListControlsComponent } from './components/beer-list-controls/beer-list-controls.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    TopBarComponent,
    BeerListControlsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BeerListComponent },
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [BeersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
