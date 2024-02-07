import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { RouterModule, Routes } from '@angular/router'
import { HeroSearchComponent } from '@features/dashboard/components/hero-search/hero-search.component'

const dashboardRoutes: Routes = [
  { path: '', component: DashboardPageComponent }
]

@NgModule({
  declarations: [DashboardPageComponent, HeroSearchComponent],
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)]
})
export class DashboardModule {}
