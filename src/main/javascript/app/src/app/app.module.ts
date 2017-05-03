import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SpotifyService} from "./service/spotify.service";
import { ArtistComponent } from './component/artist/artist.component';
import { AlbumComponent } from './component/album/album.component';
import { SongComponent } from './component/song/song.component';
import {routing} from "./app.routing";
import { AlbumDetailsComponent } from './component/album-details/album-details.component';
import { SongDetailsComponent } from './component/song-details/song-details.component';
import {UserRegisterComponent} from "./user/user-register/user-register.component";
import {PlaylistCreatorComponent} from "./user/user-register/playlist-creator/playlist-creator.component";
import {UserComponent} from "./user/user.component";
import {PlaylistEditorComponent} from "./user/user-register/playlist-editor/playlist-editor.component";
import {AddSongComponent} from "./user/user-register/playlist-editor/add-song/add-song.component";
import { AngularjsComponentComponent } from './component/angularjs-component/angularjs-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    SongComponent,
    AlbumDetailsComponent,
    SongDetailsComponent,
    PlaylistEditorComponent,
    UserRegisterComponent,
    PlaylistCreatorComponent,
    UserComponent,
    AddSongComponent,
    AngularjsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
