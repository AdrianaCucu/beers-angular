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
import { FavouritesComponent } from './components/favourites/favourites.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    TopBarComponent,
    BeerListControlsComponent,
    FavouritesComponent,
    BeerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BeerListComponent },
      { path: ':currentPage', component: BeerListComponent },
      { path: 'beers/:beerId', component: BeerDetailsComponent },
      { path: 'favourites', component: FavouritesComponent }
    ])
  ],
  providers: [BeersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
