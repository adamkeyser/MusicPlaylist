//part of authen
import {Injectable} from "@angular/core";
import {RestfulData} from "./restful.data";
import {Observable} from "rxjs";
import "rxjs/add/operator/map"

@Injectable()
export class AuthenService{

  constructor(private data:RestfulData) {}

  authentication(user: string, password: string): Observable<boolean> {
    return this.data.authentication(user, password);
  }


  get authenticate(): boolean {
    return this.data.authenToken != null;
  }

  clear() {
    this.data.authenToken = null;
  }

}
export class ModelModule{}
