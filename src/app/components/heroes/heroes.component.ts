import { Component } from '@angular/core'
import { Hero } from './heroes.types'
import { HEROES } from '../../config/heroes.mock'

@Component({
  selector: 'app-heroes',
  template: `
    <h2>My Heroes</h2>

    <ul class="heroes">
      @for (hero of heroes; track hero.id) {
        <li>
          <button
            type="button"
            (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero"
          >
            <span class="badge">{{ hero.id }}</span>
            <span class="name">{{ hero.name }}</span>
          </button>
        </li>
      } @empty {
        <span>No Heroes available</span>
      }
    </ul>

    @if (selectedHero) {
      <app-hero-details [hero]="selectedHero"></app-hero-details>
    }
  `,
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  public selectedHero: Hero | null = null
  public heroes: Hero[] = HEROES

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
