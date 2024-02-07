import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardPageComponent } from '@features/dashboard/pages/dashboard-page/dashboard-page.component'
import { HeroesListComponent } from '@features/hero/pages/heroes-list/heroes-list.component'
import { HeroDetailsComponent } from '@features/hero/pages/hero-details/hero-details.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'heroes', component: HeroesListComponent },
  { path: 'heroes/:id', component: HeroDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
