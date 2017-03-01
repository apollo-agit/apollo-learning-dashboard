import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
     path: 'forms-main-component', 
    loadChildren: 'app/pages/pka-forms/forms.main.module#FormsMainModule' 
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      { path: 'forms-main-component', loadChildren: 'app/pages/pka-forms/forms.main.module#FormsMainModule' }
      
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
