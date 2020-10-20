import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule, NativeScriptModule, NativeScriptRouterModule } from '@nativescript/angular';

import { BacklogModule } from '../backlog/backlog.module';
import { AuthPageComponent } from './pages/auth/auth.page.component';
import { LoginFormComponent } from './components/login-form.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        BacklogModule
    ],
    exports: [
    ],
    declarations: [
        AuthPageComponent,
        LoginFormComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }
