import { Component, OnInit } from '@angular/core'
import { Hero } from '@shared/types/heroes.types'
import { HeroService } from '@shared/services/hero.service'
import { HeroDetailsComponent } from '../hero-details/hero-details.component'
import { HeroLinkComponent } from '../../components/hero-link/hero-link.component'

@Component({
  selector: 'app-heroes',
  template: `
    <h2>My Heroes</h2>

    <div>
      <label for="new-hero">Hero name: </label>
      <input id="new-hero" #heroName />

      <button
        type="button"
        class="add-button"
        (click)="add(heroName.value); heroName.value = ''"
      >
        Add hero
      </button>
    </div>

    <ul class="heroes">
      @for (hero of heroes; track hero.id) {
        <li>
          <app-hero-link
            [hero]="hero"
            [isSelected]="hero === selectedHero"
            (handleDelete)="onHeroDelete($event)"
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
  styleUrl: './heroes-list.component.scss',
  standalone: true,
  imports: [HeroLinkComponent, HeroDetailsComponent]
})
export class HeroesListComponent implements OnInit {
  public selectedHero: Hero | null = null
  public heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes: Hero[]) => (this.heroes = heroes))
  }

  add(name: string): void {
    if (name.trim()) {
      this.heroService
        .addHero({ name: name.trim() })
        .subscribe((hero: Hero) => {
          this.heroes.push(hero)
        })
    }
  }

  onHeroDelete(hero: Hero) {
    this.heroes = this.heroes.filter((h) => h !== hero)
    this.heroService.deleteHero(hero.id)
  }
}
