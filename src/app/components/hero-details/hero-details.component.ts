import { Component, Input } from '@angular/core'
import { Hero } from '../heroes/heroes.types'

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
  `,
  styleUrl: './hero-details.component.scss'
})
export class HeroDetailsComponent {
  @Input({ required: true })
  public hero!: Hero
}
