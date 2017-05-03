
import {Routes, RouterModule} from "@angular/router";
import {SongComponent} from "./component/song/song.component";
import {AlbumComponent} from "./component/album/album.component";
import {ArtistComponent} from "./component/artist/artist.component";
import {AlbumDetailsComponent} from "./component/album-details/album-details.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {PlaylistCreatorComponent} from "./user/user-register/playlist-creator/playlist-creator.component";
import {UserComponent} from "./user/user.component";
import {PlaylistEditorComponent} from "./user/user-register/playlist-editor/playlist-editor.component";
import {AddSongComponent} from "./user/user-register/playlist-editor/add-song/add-song.component";
import {AngularjsComponentComponent} from "./component/angularjs-component/angularjs-component.component";

const APP_ROUTES: Routes = [

  //HW4
  {path: 'albumDetail', component: AngularjsComponentComponent},
  {path: 'adduser/user/editplaylist/addsong', component: AddSongComponent},
  {path: 'adduser/user/editplaylist', component: PlaylistEditorComponent},
  {path: 'adduser/user/createplaylist', component: PlaylistCreatorComponent},
  //loaded user page with its id, later.
  {path: 'adduser/user', component: UserComponent},
  {path: 'adduser', component: UserRegisterComponent},


  //HW3
  {path: 'track/:id', component: SongComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'song', component: SongComponent},
  {path: 'albumDetails/:href', component: AlbumDetailsComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
