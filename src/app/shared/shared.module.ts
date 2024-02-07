import { NgModule, Type } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MessagesComponent } from '@shared/components/messages/messages.component'
import { TruncatePipe } from './pipes/truncate.pipe'

const EXPORTED_COMPONENTS: Array<Type<any> | any[]> = [
  MessagesComponent,
  TruncatePipe
]

@NgModule({
  declarations: [...EXPORTED_COMPONENTS],
  imports: [CommonModule],
  exports: [CommonModule, ...EXPORTED_COMPONENTS]
})
export class SharedModule {}
