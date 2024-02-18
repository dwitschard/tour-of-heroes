import { HeroesListComponent } from './pages/heroes-list/heroes-list.component'
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component'

export default [
  { path: '', component: HeroesListComponent },
  { path: ':id', component: HeroDetailsComponent }
]
