
//part of authen: RESTful comm. requests and including JWT
import {Injectable} from "@angular/core";
import {Http, RequestMethod, Request} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map"

const protocol = "http"
const port = 4200

@Injectable()
export class RestfulData {

  baseUrl: string;
  authenToken: string;


  constructor (private http: Http){
    this.baseUrl = '${protocol}://${location.hostname}:${port}';
  }

  authentication(user: string, password: string): Observable<boolean> {
    return this.http.request(new Request({
      method: RequestMethod.Post,
      url: this.baseUrl + "login",
      body: {name: user, password: password}
    })).map(response => {
      let res = response.json();
      this.authenToken = res.success ? res.token : null;
      return res.success;
    });


  }




}
