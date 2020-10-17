import { Injectable } from '@angular/core';
import { configs } from '../../config';
import { LogEntry } from '../models/core/log-entry.model';
import { LoggingLevelEnum } from '../models/enums';

@Injectable({providedIn: 'root'})
export class LoggerService {

    private logs: LogEntry[] = [];

    constructor(
    ) { }

    public log(message: string) {
        if (configs.loggingEnabled && configs.loggingLevel ===
                LoggingLevelEnum.Debug) {
            this.logs.push({ message: message, level: LoggingLevelEnum.Log });
            console.logColor(message);
        }
    }

    public warn(message: string) {
        if (configs.loggingEnabled && configs.loggingLevel ===
                LoggingLevelEnum.Debug) {
            this.logs.push({ message: message, level: LoggingLevelEnum.Warn });
            console.warnColor(message);
        }
    }

    public error(message: string) {
        if (configs.loggingEnabled) {
            this.logs.push({ message: message, level: LoggingLevelEnum.Error });
            console.errorColor(message);
        }
    }

}
