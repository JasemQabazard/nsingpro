import { Component, OnInit } from '@angular/core';
import { PresetType } from '../../models/ui/types/presets';

@Component({
    selector: 'pt-menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public onSelectPresetTap(preset: PresetType) {
        // TODO: navigate to the preset url
    }
}
