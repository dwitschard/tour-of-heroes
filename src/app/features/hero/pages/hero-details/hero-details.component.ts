import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { Hero } from '@shared/types/heroes.types'
import { HeroService } from '@shared/services/hero.service'

@Component({
  selector: 'app-hero-details',
  template: `
    <div>
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div>id: {{ hero.id }}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
      </div>
    </div>

    <button type="button" (click)="goBack()">go back</button>
  `,
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent implements OnInit {
  @Input({ required: true })
  public hero!: Hero

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero))
  }

  goBack() {
    this.location.back()
  }
}
