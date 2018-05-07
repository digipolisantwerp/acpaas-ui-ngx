import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LabelsModule, Label } from '@acpaas-ui/labels';

import { ItemCounterComponent } from './components/item-counter.component';
import { ItemsPerPageComponent } from './components/items-per-page.component';

import { ITEM_COUNTER_LABEL, ITEMS_PER_PAGE_LABEL } from './item-counter.const';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LabelsModule
    ],
    declarations: [
        ItemCounterComponent,
        ItemsPerPageComponent
    ],
    exports: [
        ItemCounterComponent,
        ItemsPerPageComponent
    ],
    providers: [
        { provide: ITEM_COUNTER_LABEL, useValue: undefined },
        { provide: ITEMS_PER_PAGE_LABEL, useValue: undefined }
    ]
})
export class ItemCounterModule {
    static forChild(itemCounterLabel: Label, itmesPerPageLabel: Label) {
        return {
            ngModule: ItemCounterModule,
            providers: [
                { provide: ITEM_COUNTER_LABEL, useValue: itemCounterLabel },
                { provide: ITEMS_PER_PAGE_LABEL, useValue: itmesPerPageLabel }
            ]
        };
    }
}
