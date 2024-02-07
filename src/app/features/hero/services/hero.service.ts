import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { MessageService } from '@shared/services/message.service'
import { HEROES } from '../config/heroes.mock'
import { Hero } from '@features/hero/types/heroes.types'

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
}
