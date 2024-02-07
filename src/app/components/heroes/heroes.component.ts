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
      <div>
        <h2>{{ selectedHero.name | uppercase }} Details</h2>
        <div>id: {{ selectedHero.id }}</div>
        <div>
          <label for="hero-name">Hero name: </label>
          <input
            id="hero-name"
            [(ngModel)]="selectedHero.name"
            placeholder="name"
          />
        </div>
      </div>
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
