import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

//cut the routes from app.module.ts and paste here, because will be constroller from here.
const appRoutes: Routes = [
    { path: '', component: HomeComponent}, //every path starts with ''
    { path: 'users', component: UsersComponent, children:
    [ { path: ':id/:name', component: UserComponent },
    
    ] },
    { path: 'users/:id/:name', component: UserComponent },
    { path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/:edit', component: EditServerComponent },
    ] },
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo:'/not-found'}//toma todas las rutas el **, siempre va al final
    ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}