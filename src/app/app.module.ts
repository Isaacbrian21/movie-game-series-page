import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule } from '@angular/material/menu'
import {MatButtonModule } from '@angular/material/button'
import {MatIconModule } from '@angular/material/icon'
import {MatSidenavModule } from '@angular/material/sidenav'
import {MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './modules/components/homes/home/home.component';
import { GamesComponent } from './modules/components/game/games/games.component';
import { FavoritesComponent } from './modules/components/fav/favorites/favorites.component';
import { MoviesComponent } from './modules/components/movie/movies/movies.component';
import { SeriesComponent } from './modules/components/serie/series/series.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    FavoritesComponent,
    MoviesComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
