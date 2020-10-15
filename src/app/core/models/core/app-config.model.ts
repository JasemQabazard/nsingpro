import { TypeProvider } from '@angular/core';
import { LoggingLevelEnum } from '../enums/loggin-level.enum';

export type AppType = 'Ns' | 'Web';

export interface AppConfig {
    appType: AppType;
    apiEndpoint: string;
    loggingEnabled: boolean;
    logginLevel: LoggingLevelEnum;
    storageSAerviceClass: TypeProvider;
}
