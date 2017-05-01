import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

 // @ViewChild('f')
  registerForm;

  ngOnInit() {

  }

}
