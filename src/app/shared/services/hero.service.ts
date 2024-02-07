import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'
import { Hero } from '../types/heroes.types'
import { HEROES } from '../config/heroes.mock'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    let fetchedHeroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return fetchedHeroes
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }
}
