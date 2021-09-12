import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GabaritsModule } from '../gabarits/gabarits.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    GabaritsModule,
    IconsModule
  ]
})
export class SharedModule { }
