import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { ViewRoutingModules } from "./view-routing.module";



@NgModule({
  declarations: [
    ViewsHomeComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModules,
  ],
  exports:[
    ViewsHomeComponent,
  ]
})
export class ViewsModule { }
