import { Component, OnInit } from '@angular/core';

import { BackLogService } from '../../services/backlog.service';
import { Store } from '../../../../core/state/app-store';
import { PtItem } from 'src/app/core/models/domain/pt-item.model';

@Component({
    selector: 'pt-backlog',
    templateUrl: 'backlog.page.component.html'
})

export class BacklogPageComponent implements OnInit {

    public items$ = this.store.select<PtItem[]>('backlogItems');

    constructor(
        private backlogService: BackLogService,
        private store: Store
    ) { }

    ngOnInit() {
        this.backlogService.fetchItems();
     }
     selectListItem(item: PtItem) {
         // TODO navigate to detail page
     }

     onAddTap(args) {
         // TODO show add item dialog
     }
}
