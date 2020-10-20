import { NgZone } from '@angular/core';

import { Injectable } from '@angular/core';
import { BackLogRepository } from '../repositories/backlog.repository';
import { Store } from '../../../core/state/app-store';
import { PtItem } from '../../../core/models/domain/pt-item.model';

@Injectable({providedIn: 'root'})
export class BackLogService {
    constructor(
        private repo: BackLogRepository,
        private store: Store,
        private zone: NgZone

    ) { }

    public fetchItems() {
        this.repo.getPtItems().subscribe(ptItems => {
            console.log('@@@@ plitems length ', ptItems.length);
            this.zone.run(() => {
                this.store.set('backlogItems', ptItems);
            });
        });
    }

}
