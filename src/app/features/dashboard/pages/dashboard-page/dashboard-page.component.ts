import { Component, OnInit } from '@angular/core'
import { Hero } from '@shared/types/heroes.types'
import { HeroService } from '@shared/services/hero.service'
import { HeroSearchComponent } from '../../components/hero-search/hero-search.component'
import { RouterLink } from '@angular/router'
import { NgFor } from '@angular/common'

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
  styleUrl: './dashboard-page.component.scss',
  standalone: true,
  imports: [NgFor, RouterLink, HeroSearchComponent]
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
      .subscribe((heroes: Hero[]) => (this.heroes = heroes.slice(1, 5)))
  }
}
