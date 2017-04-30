/**import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Component} from "@angular/core"


@Component({
  templateUrl: './authen.component.html'
  }

)


export class AuthenComponent {

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
*/
