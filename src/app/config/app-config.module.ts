import { InjectionToken, NgModule } from '@angular/core';
import { AppConfig } from '../core/models/core/app-config.model';
import { environment } from '../environments/environment';

const appConfig = <AppConfig> require(environment.appConfigFile);
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@NgModule({
    providers: [
        {provide: APP_CONFIG, useValue: appConfig }
    ]
})
export class AppConfigModule { }
