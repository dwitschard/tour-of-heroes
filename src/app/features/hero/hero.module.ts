import { NgModule, Type } from '@angular/core'
import { SharedModule } from '@shared/shared.module'
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroDetailsComponent } from './components/hero-details/hero-details.component'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

const EXPORTED_COMPONENTS: Array<Type<any> | any[]> = [HeroesComponent]

@NgModule({
  declarations: [...EXPORTED_COMPONENTS, HeroDetailsComponent],
  imports: [SharedModule, FormsModule, RouterModule.forChild([])],
  exports: [...EXPORTED_COMPONENTS]
})
export class HeroModule {}
