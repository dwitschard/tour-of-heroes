import { Component, Input } from '@angular/core'
import { Hero } from '@features/hero/types/heroes.types'

@Component({
  selector: 'app-hero-link',
  template: `
    <a routerLink="{{ hero.id }}">
      <span [class.selected]="isSelected" class="badge">{{ hero.id }}</span>
      {{ hero.name | truncate: 7 : '...' }}
    </a>
  `,
  styleUrl: './hero-link.component.scss'
})
export class HeroLinkComponent {
  @Input({ required: true })
  public hero!: Hero

  @Input()
  public isSelected = false
}
