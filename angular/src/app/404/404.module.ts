import { PageNotFoundComponent } from './404.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRouting } from './404.routing';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRouting
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
