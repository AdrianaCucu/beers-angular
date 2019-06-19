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

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    TopBarComponent,
    BeerListControlsComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BeerListComponent },
      { path: 'favourites', component: FavouritesComponent }
    ])
  ],
  providers: [BeersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
