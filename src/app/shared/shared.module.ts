import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MessagesComponent } from '@shared/components/messages/messages.component'
import { TruncatePipe } from './pipes/truncate.pipe'

@NgModule({
  declarations: [MessagesComponent, TruncatePipe],
  imports: [CommonModule],
  exports: [CommonModule, MessagesComponent, TruncatePipe]
})
export class SharedModule {}
