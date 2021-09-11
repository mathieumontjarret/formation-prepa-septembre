import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { GabaritsModule } from '../gabarits/gabarits.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UiModule,
    IconsModule,
    GabaritsModule
  ]
})
export class CoreModule { }
