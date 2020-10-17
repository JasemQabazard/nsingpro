import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import {Device} from '@nativescript/core/platform';
import { LoggerService } from '../../../core/services/logger.service';

@Component({
    selector: 'app-signon',
    templateUrl: './signon.component.html'
})

export class SignOnComponent implements OnInit {
    myAppText = 'Hello';

    constructor(
        private page: Page,
        private loggerService: LoggerService,
    ) {
        // page.actionBarHidden = true;
        // page.backgroundSpanUnderStatusBar = true;
        this.myAppText = Device.language;

        this.loggerService.log('RPS message log ');
        this.loggerService.warn('RPS message log ');
        this.loggerService.error('RPS message log ');
     }

    ngOnInit() { }
}
