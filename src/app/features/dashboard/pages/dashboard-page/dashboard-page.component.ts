import { Component, OnInit } from '@angular/core'
import { HeroService } from '../../../hero/services/hero.service'
import { Hero } from '../../../hero/types/heroes.types'

@Component({
  selector: 'app-dashboard-page',
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a *ngFor="let hero of heroes" routerLink="/heroes/{{ hero.id }}">
        {{ hero.name }}
      </a>
    </div>
  `,
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)))
  }
}
