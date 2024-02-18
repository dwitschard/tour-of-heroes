import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Hero } from '@shared/types/heroes.types'
import { TruncatePipe } from '@shared/pipes/truncate.pipe'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-hero-link',
  template: `
    <a routerLink="{{ hero.id }}">
      <span [class.selected]="isSelected" class="badge">{{ hero.id }}</span>
      {{ hero.name | truncate: 7 : '...' }}
      <button
        type="button"
        class="delete"
        title="delete hero"
        (click)="handleDeleteHero($event, hero)"
      >
        x
      </button>
    </a>
  `,
  styleUrl: './hero-link.component.scss',
  standalone: true,
  imports: [RouterLink, TruncatePipe]
})
export class HeroLinkComponent {
  @Input({ required: true })
  public hero!: Hero

  @Input()
  public isSelected = false

  @Output()
  public handleDelete: EventEmitter<Hero> = new EventEmitter<Hero>()

  handleDeleteHero($event: MouseEvent, hero: Hero) {
    $event.preventDefault()
    this.handleDelete.emit(hero)
  }
}
