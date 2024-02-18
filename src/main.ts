import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component'
import { HeroMockApiService } from './app/mock-api/hero.mock.api.service'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { APP_ROUTES } from './app/app.routes'
import { provideHttpClient } from '@angular/common/http'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideRouter(APP_ROUTES),
    // Important: Register HttpClientInMemoryWebApiModule **after** provideHttpClient!
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(HeroMockApiService, {
        dataEncapsulation: false
      })
    )
  ]
}).catch((err) => console.error(err))
