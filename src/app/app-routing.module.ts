import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { canDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
    //Here we indicate the path and the behaviour, i.e., go to the specified component
    { path: "", component: HomeComponent },
    {
        path: "users",
        component: UsersComponent,
        // The column just tells Angular that it is a dynamic part
        children: [{ path: ":id/:firstName/:lastName", component: UserComponent }],
    },
    {
        path: "servers", 
        // canActivate: [AuthGuard],
        //This way, is will be applied to all the children routes:
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        children: [
            { path: ":id", component: ServerComponent, resolve: {server: ServerResolver} },
            { path: ":id/edit", component: EditServerComponent, canDeactivate: [canDeactivateGuard] },
        ],
    },
    { path: "not-found", component: PageNotFoundComponent },
    //Wildcard to redirect all the unknown routes. It has to be placed the last one. 
    { path: '**', redirectTo: "/not-found" },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
})

export class AppRoutingModule {
}