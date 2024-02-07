import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-heroes />
    <app-messages />
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes'
}
