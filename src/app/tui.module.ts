import { NgModule } from '@angular/core';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiCardModule } from '@taiga-ui/experimental';

@NgModule({
  imports: [],
  exports: [
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiAccordionModule,
    TuiCardModule,
  ],
})
export class TuiModule {}
