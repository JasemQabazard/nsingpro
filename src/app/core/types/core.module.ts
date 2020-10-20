import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { Store } from '../state/app-store';
import { RpsErrorHandler } from '../helpers/rps-error-handler';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        { provide: ErrorHandler, useClass: RpsErrorHandler},
        Store
    ],
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new
            Error('Core Module has already been loaded. Import the CoreModule into the AppModule only.');
        }
    }
}

