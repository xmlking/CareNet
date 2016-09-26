import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent }    from './404.component';

export const PageNotFoundRoutes: Routes = [
  { path: '404',    component: PageNotFoundComponent }
];

export const PageNotFoundRouting = RouterModule.forChild(PageNotFoundRoutes);

