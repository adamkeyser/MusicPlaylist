import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html'
})
export class UserRegisterComponent implements OnInit {

  constructor (private router: Router) {}
 // @ViewChild('f')
  registerForm;

  ngOnInit() {

  }

}
