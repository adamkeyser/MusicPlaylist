/**
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../service/spotify.service";

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { UserRegisterComponent } from './user-register/user-register.component';
import {UserRoutingModule} from "./user-routing.module";


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    UserRoutingModule
  ],
  declarations: [
    UserRegisterComponent
  ],
  exports: [
    UserRoutingModule
  ]
})

export class UserModule implements OnInit{
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  )  { }

  ngOnInit() {
  }
}
 */
