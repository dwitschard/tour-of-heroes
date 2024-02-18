import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { MessagesComponent } from '@shared/components/messages/messages.component'

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>

    <router-outlet />

    <app-messages />
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterOutlet, MessagesComponent]
})
export class AppComponent {
  title = 'Tour of Heroes'
}
