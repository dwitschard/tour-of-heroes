import { NgModule, Type } from '@angular/core'
import { SharedModule } from '@shared/shared.module'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HeroLinkComponent } from './components/hero-link/hero-link.component'
import { HeroesListComponent } from '@features/hero/pages/heroes-list/heroes-list.component'
import { HeroDetailsComponent } from '@features/hero/pages/hero-details/hero-details.component'

const EXPORTED_COMPONENTS: Array<Type<any> | any[]> = [HeroesListComponent]

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
    HeroDetailsComponent,
    HeroLinkComponent
  ],
  imports: [SharedModule, FormsModule, RouterModule.forChild([])],
  exports: [...EXPORTED_COMPONENTS]
})
export class HeroModule {}
