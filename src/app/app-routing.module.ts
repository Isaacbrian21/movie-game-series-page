import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', loadChildren: () => import('../app/modules/components/homes/homes.module').then(home => home.HomesModule)},

  {path:'games', loadChildren: () => import('../app/modules/components/game/game.module').then(games => games.GameModule)},

  {path:'favorite', loadChildren: () => import('../app/modules/components/fav/fav.module').then(fav => fav.FavModule)},

  {path:'movies', loadChildren: () => import('../app/modules/components/movie/movie.module').then(movies => movies.MovieModule)},

  {path:'series', loadChildren: () => import('../app/modules/components/serie/serie.module').then(series => series.SerieModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
