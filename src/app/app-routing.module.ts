import { NgModule } from '@angular/core'
import { NoPreloading, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      )
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./features/hero/hero.module').then((m) => m.HeroModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
