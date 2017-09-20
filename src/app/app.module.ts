import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { MessagingService } from './app-resources/app-services/messaging.service';
import { LoaderService } from './app-resources/app-services/loader.service';
import { GlobalService } from './app-resources/app-services/global.service';

// our primary application routes
import {routing, appRoutingProviders } from './app-resources/app-routes/app.routes';

// third party
import { TranslationModule, LocaleService, TranslationService } from 'angular-l10n';
import { MaterialModule } from '@angular/material';
import { DialogDirective } from './app-resources/common/modal-dialog/dialog.directive';

import { AppComponent } from './app.component';
import { ScenarioEntryComponent } from './features/scenario-entry/scenario-entry.component';
import { SetComponent } from './features/lookups/set/set.component';
import { ProducerComponent } from './features/lookups/producer/producer.component';
import { SourceComponent } from './features/admin/source/source.component';
import { ModalDialogComponent } from './app-resources/common/modal-dialog/modal-dialog.component';
import { NationalityComponent } from './features/lookups/nationality/nationality.component';





@NgModule({
  declarations: [
    AppComponent,
    ScenarioEntryComponent,
    SourceComponent,
    ModalDialogComponent,
    DialogDirective,
    SetComponent,
    ProducerComponent,
    NationalityComponent
  ],
  entryComponents:[
    SetComponent,
    ProducerComponent,
    NationalityComponent
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
    TranslationService,
    MessagingService,
    LoaderService,
    GlobalService
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
