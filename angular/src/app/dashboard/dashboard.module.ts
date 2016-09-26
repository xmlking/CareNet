import { NgModule } from '@angular/core';

import { SharedModule }     from '../shared/shared.module';
import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    dashboardRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
