import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LogComponent } from './pages/log/log.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonComponent } from './pages/person/person.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
    declarations: [
        LoginComponent,
        AuthenticationComponent,
        UserComponent,
        PersonComponent,
        LogComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule
    ]
})

export class AuthenticationModule { }