import { Route } from '@angular/router'

export const APP_ROUTES: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes')
  },
  {
    path: 'heroes',
    loadChildren: () => import('./features/hero/hero.routes')
  }
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: '**', redirectTo: '' }
]
