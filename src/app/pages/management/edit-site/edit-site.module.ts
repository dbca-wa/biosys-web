import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { EditSiteComponent } from './edit-site.component';
import { InputTextModule, InputTextareaModule, DialogModule, ButtonModule, GrowlModule, ConfirmDialogModule,
    ConfirmationService } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        InputTextModule,
        InputTextareaModule,
        DialogModule,
        ButtonModule,
        GrowlModule,
        ConfirmDialogModule
    ],
    declarations: [EditSiteComponent],
    exports: [EditSiteComponent],
    providers: [ConfirmationService]
})
export class EditSiteModule {
}
