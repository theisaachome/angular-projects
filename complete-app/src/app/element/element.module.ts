import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';


@NgModule({
  declarations: [
    ElementsHomeComponent
  ],
  imports: [
    CommonModule,
    ElementRoutingModule
  ],

})
export class ElementModule { }
