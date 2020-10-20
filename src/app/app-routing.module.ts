import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { BacklogPageComponent } from './modules/backlog/pages';

import { AuthPageComponent } from './modules/auth/pages/auth/auth.page.component';

const routes: Routes = [
    { path: '', component: AuthPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
