import { Component, OnInit } from '@angular/core'
import { HeroService } from '../../services/hero.service'
import { MessageService } from '@shared/services/message.service'
import { Hero } from '@features/hero/types/heroes.types'

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
            <span class="name">{{ hero.name | truncate: 7 : '...' }}</span>
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
export class HeroesComponent implements OnInit {
  public selectedHero: Hero | null = null
  public heroes: Hero[] = []

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes))
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
}
