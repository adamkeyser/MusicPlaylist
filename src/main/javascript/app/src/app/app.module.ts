import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SpotifyService} from "./service/spotify.service";
import { ArtistComponent } from './component/artist/artist.component';
import { AlbumComponent } from './component/album/album.component';
import { SongComponent } from './component/song/song.component';
import {routing} from "./app.routing";
import { AlbumDetailsComponent } from './component/album-details/album-details.component';
import { SongDetailsComponent } from './component/song-details/song-details.component';
import { RegisterComponent } from './register/register.component';
import {AuthenGuard} from "./register/authen.guard";


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    SongComponent,
    AlbumDetailsComponent,
    SongDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SpotifyService, AuthenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
