import { Component } from '@angular/core'
import { HeroService } from '@shared/services/hero.service'
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap
} from 'rxjs'
import { Hero } from '@shared/types/heroes.types'
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-hero-search',
    template: `
    <div id="search-component">
      <label for="search-box">Hero Search</label>
      <input #searchBox id="search-box" (input)="search(searchBox.value)" />

      <ul class="search-result">
        <li *ngFor="let hero of heroes$ | async">
          <a routerLink="/heroes/{{ hero.id }}">
            {{ hero.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
    styleUrl: './hero-search.component.scss',
    standalone: true,
    imports: [NgFor, RouterLink, AsyncPipe]
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>
  private searchTerms = new Subject<string>()

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }
}
