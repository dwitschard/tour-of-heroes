import { Component } from '@angular/core'
import { MessageService } from '../../services/message.service'
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-messages',
  template: `
    <div *ngIf="messageService.messages.length">
      <h2>Messages</h2>
      <button type="button" class="clear" (click)="messageService.clear()">
        Clear messages
      </button>
      <div *ngFor="let message of messageService.messages">{{ message }}</div>
    </div>
  `,
  styleUrl: './messages.component.scss',
  standalone: true,
  imports: [NgIf, NgFor]
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
