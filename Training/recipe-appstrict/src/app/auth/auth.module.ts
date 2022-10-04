import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import {MatButtonModule} from '@angular/material/button';
import { AuthComponent } from "./auth.component";
import { CustomModule } from "./custom.module";



@NgModule({
    declarations:[AuthComponent],
    imports: [
        CommonModule,
         FormsModule,
          RouterModule.forChild([ {path:'', component: AuthComponent},]),
         MatButtonModule,
         CustomModule
        ],
})
export class AuthModule {

}