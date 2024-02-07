import { Component } from '@angular/core';
import {Hero} from "./heroes.types";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

}
