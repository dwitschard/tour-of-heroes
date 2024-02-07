import { Component } from '@angular/core'
import { Hero } from './heroes.types'

@Component({
  selector: 'app-heroes',
  template: `
    <h2>{{ hero.name | uppercase }} Details</h2>

    <div><span>id: </span>{{ hero.id }}</div>
    <div><span>name: </span>{{ hero.name }}</div>

    <div>
      <label for="name">Hero name: </label>
      <input id="name" [(ngModel)]="hero.name" placeholder="name" />
    </div>
  `,
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
