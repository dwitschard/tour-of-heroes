import { Component, OnInit } from '@angular/core'
import { Hero } from '@shared/types/heroes.types'
import { HeroService } from '@shared/services/hero.service'

@Component({
  selector: 'app-dashboard-page',
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a *ngFor="let hero of heroes" routerLink="/heroes/{{ hero.id }}">
        {{ hero.name }}
      </a>
    </div>
    <app-hero-search></app-hero-search>
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
