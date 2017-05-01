
//part of authen: no direct navigation to user account
import {Injectable} from "@angular/core";
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthenService} from "../datamodel/authen.service";



@Injectable()
export class AuthenGuard{

  constructor(private router: Router, private authen: AuthenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  if (!this.authen.authenticate) {
    this.router.navigateByUrl("/register");
    return false;
  }
    return true;
  }

}
