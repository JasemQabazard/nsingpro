import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { CoreModule } from './core/types/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignOnComponent } from './modules/auth/signon/signon.component';
import './utils/console-color';
import './rxjs-imports';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        CoreModule,
    ],
    declarations: [
        AppComponent,
        SignOnComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
