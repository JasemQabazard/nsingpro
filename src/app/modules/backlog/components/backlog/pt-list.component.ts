import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ItemEventData } from '@nativescript/core/ui/list-view';
import { PtItem } from 'src/app/core/models/domain/pt-item.model';

@Component({
    selector: 'pt-list',
    templateUrl: 'pt-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PtListComponent {

    @Input() items: PtItem[];
    @Output() listItemSelected: EventEmitter<PtItem> = new EventEmitter<PtItem>();


    constructor() {
        console.log('pt-list items length : ');
    }

    public listItemTap(args: ItemEventData) {
        const lv = args.object;
        const item = <PtItem>(<any>lv).items[args.index];
        this.listItemSelected.emit(item);
    }

}
