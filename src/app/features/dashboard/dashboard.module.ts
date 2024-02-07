import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { RouterModule, Routes } from '@angular/router'

const dashboardRoutes: Routes = [
  { path: '', component: DashboardPageComponent }
]

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)]
})
export class DashboardModule {}
