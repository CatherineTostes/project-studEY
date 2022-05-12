import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
    },
    {
        path: 'login',
        children: [
            {
                path: "",
                component: LoginComponent
            }
        ]
    }
];

 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthenticationRoutingModule { }