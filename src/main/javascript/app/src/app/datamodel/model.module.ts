//part of authen
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RestfulData} from "./restful.data";
import {AuthenService} from "./authen.service";

@NgModule({

  imports: [HttpModule],
  providers: [RestfulData, AuthenService]

})

export class ModelModule {}
