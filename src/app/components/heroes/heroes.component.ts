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
          <button type="button">
            <span class="badge">{{ hero.id }}</span>
            <span class="name">{{ hero.name }}</span>
          </button>
        </li>
      } @empty {
        <span>No Heroes available</span>
      }
    </ul>
  `,
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  public heroes: Hero[] = HEROES
}
