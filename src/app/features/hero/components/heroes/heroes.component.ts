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
          <a routerLink="{{ hero.id }}">
            <span [class.selected]="hero === selectedHero" class="badge">{{
              hero.id
            }}</span>
            {{ hero.name | truncate: 7 : '...' }}
          </a>
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

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes))
  }
}
