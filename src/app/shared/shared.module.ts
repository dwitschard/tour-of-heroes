import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MessagesComponent } from '@shared/components/messages/messages.component'
import { TruncatePipe } from './pipes/truncate.pipe'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [MessagesComponent, TruncatePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule, HttpClientModule, MessagesComponent, TruncatePipe]
})
export class SharedModule {}
