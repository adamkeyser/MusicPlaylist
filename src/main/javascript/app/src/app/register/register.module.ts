/**import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";
import {AuthenComponent} from "./authen.component";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


let routing = RouterModule.forChild([
  {path: "authen", component:AuthenComponent},
  {path: "user", component:RegisterComponent}
  ]
)

@NgModule( {
  declarations: [
    AuthenComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
})

export class RegisterModule {}


*/
