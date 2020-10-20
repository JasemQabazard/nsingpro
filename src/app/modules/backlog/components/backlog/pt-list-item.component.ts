import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { PtItem } from '../../../../core/models/domain/pt-item.model';
// import { ItemType } from '../../../../core/constants/pt-item-types';

@Component({
    selector: 'pt-list-item',
    templateUrl: 'pt-list-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtListItemComponent {

    @Input() item: PtItem;

    constructor() { }

/*     public getIndicatorClass(item: PtItem): string {
        return ItemType.indicatorClassFromType(item.type);
    } */
}
