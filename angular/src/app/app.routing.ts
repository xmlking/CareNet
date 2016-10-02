import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },

  // PageNotFoundRoute should be last
  { path: '**', redirectTo: '404', pathMatch: 'full'},
];

export const appRouting = RouterModule.forRoot(appRoutes);




