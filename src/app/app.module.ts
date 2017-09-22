import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




// services
import { MessagingService,FirebaseService, GlobalService, LoaderService, MapService } from './app-resources/app-services/index';


// our primary application routes
import {routing, appRoutingProviders } from './app-resources/app-routes/app.routes';

// third party
import { TranslationModule, LocaleService, TranslationService } from 'angular-l10n';
import { MaterialModule } from '@angular/material';
import { DialogDirective } from './app-resources/common/modal-dialog/dialog.directive';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// must export the firebase config
export const firebaseConfig = {
    apiKey: 'AIzaSyBQRJ17P_DoiWQyCCTwa9WOmNqtstfNqeM',
    authDomain: 'scenario-tracker.firebaseapp.com',
    databaseURL: 'https://scenario-tracker.firebaseio.com',
    storageBucket: 'scenario-tracker.appspot.com',
    messagingSenderId: '745070450033'
};

import { AppComponent } from './app.component';
import { ScenarioEntryComponent } from './features/scenario-entry/scenario-entry.component';
import { SetComponent } from './features/lookups/set/set.component';
import { ProducerComponent } from './features/lookups/producer/producer.component';
import { SourceComponent } from './features/admin/source/source.component';
import { ModalDialogComponent } from './app-resources/common/modal-dialog/modal-dialog.component';
import { NationalityComponent } from './features/lookups/nationality/nationality.component';
import { MapCollectionComponent } from './features/map-collection/map-collection.component';
import { MapButtonComponent } from './features/map-collection/map-button/map-button.component';
import { LoginComponent } from './features/admin/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    ScenarioEntryComponent,
    SourceComponent,
    ModalDialogComponent,
    DialogDirective,
    SetComponent,
    ProducerComponent,
    NationalityComponent,
    MapCollectionComponent,
    MapButtonComponent,
    LoginComponent
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
    TranslationModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    TranslationService,
    MessagingService,
    LoaderService,
    GlobalService,
    MapService,
    FirebaseService
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
