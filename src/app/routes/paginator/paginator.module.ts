import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorRoutingModule } from './paginator-routing.module';
import { PaginatorComponent } from './paginator.component';


@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    PaginatorRoutingModule
  ]
})
export class PaginatorModule { }
