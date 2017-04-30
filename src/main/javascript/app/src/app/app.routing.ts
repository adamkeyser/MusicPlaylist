
import {Routes, RouterModule} from "@angular/router";
import {SongComponent} from "./component/song/song.component";
import {AlbumComponent} from "./component/album/album.component";
import {ArtistComponent} from "./component/artist/artist.component";
import {AlbumDetailsComponent} from "./component/album-details/album-details.component";
import {RegisterComponent} from "./register/register.component";



const APP_ROUTES: Routes = [

  {path: 'register', component: RegisterComponent},
 // {path: 'register', loadChildren: "app/register/register.module#RegisterModule", canActivate: [RegisterComponent]},
  {path: 'track/:id', component: SongComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'song', component: SongComponent},
  {path: 'albumDetails/:href', component: AlbumDetailsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
