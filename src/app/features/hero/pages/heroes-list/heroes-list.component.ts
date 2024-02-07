import { Component, OnInit } from '@angular/core'
import { HeroService } from '../../services/hero.service'
import { Hero } from '@features/hero/types/heroes.types'

@Component({
  selector: 'app-heroes',
  template: `
    <h2>My Heroes</h2>

    <ul class="heroes">
      @for (hero of heroes; track hero.id) {
        <li>
          <app-hero-link
            [hero]="hero"
            [isSelected]="hero === selectedHero"
          ></app-hero-link>
        </li>
      } @empty {
        <span>No Heroes available</span>
      }
    </ul>

    @if (selectedHero) {
      <app-hero-details [hero]="selectedHero"></app-hero-details>
    }
  `,
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent implements OnInit {
  public selectedHero: Hero | null = null
  public heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes))
  }
}
