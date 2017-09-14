import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// our primary application routes
import {routing, appRoutingProviders } from './app-resources/app-routes/app.routes';

import { AppComponent } from './app.component';
import { ScenarioEntryComponent } from './features/scenario-entry/scenario-entry.component';


// third party
import { TranslationModule, LocaleService, TranslationService } from 'angular-l10n';
import { MaterialModule } from '@angular/material';
import { SourceComponent } from './features/admin/source/source.component';

@NgModule({
  declarations: [
    AppComponent,
    ScenarioEntryComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    routing,
    TranslationModule.forRoot()
  ],
  providers: [
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public locale: LocaleService, public translation: TranslationService) {
    
          this.locale.addConfiguration()
            .addLanguages(['en', 'it', 'de'])
            .setCookieExpiration(30)
            .defineLanguage('en');
    
            this.translation.addConfiguration()
            .addProvider('./assets/other/locale-');
    
          this.translation.init();
  }
}
