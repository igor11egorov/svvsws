import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { NxWelcomeComponent } from './nx-welcome.component'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UiComponentModule } from '@svvsws/ui-component'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    UiComponentModule,
  ],
  // exports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
