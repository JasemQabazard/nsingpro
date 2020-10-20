import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { BacklogPageComponent } from './pages/backlog/backlog.page.component';
import { PtListComponent } from './components/backlog/pt-list.component';
import { PtListItemComponent } from './components/backlog/pt-list-item.component';

@NgModule({
    imports: [
        NativeScriptModule
    ],
    exports: [
        BacklogPageComponent
    ],
    declarations: [
        BacklogPageComponent,
        PtListComponent,
        PtListItemComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BacklogModule { }
