import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from '@shared/shared.module'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { HeroMockApiService } from './mock-api/hero.mock.api.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(HeroMockApiService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
