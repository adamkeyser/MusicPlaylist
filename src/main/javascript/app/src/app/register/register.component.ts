import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

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


  constructor (private router: Router) {}

  authentication (form: NgForm) {
    if (form.valid)
      this.router.navigateByUrl("/register")
    else
      this.message = "Invalid Data"
  }

}

