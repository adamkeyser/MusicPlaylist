import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthenService} from "../datamodel/authen.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 // templateUrl: './authen.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  public username: string;
  public password: string;
  public message: string;

  constructor (private router: Router, private authen: AuthenService) {}

  authentication (form: NgForm) {
    if (form.valid)
    {this.authen.authentication(this.username, this.password).subscribe(
      response => {
        if (response) {
          this.router.navigateByUrl("/register");
        }
          this.message = "Invalid Authentication"
      }
    )}
    else
    {this.message = "Invalid Data";}
  }

}

