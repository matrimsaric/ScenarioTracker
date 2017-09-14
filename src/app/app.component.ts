import { Component } from '@angular/core';

import { Language, TranslationService, LocaleService } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  @Language() lang: string;
  displayedLocale: string = "";

  constructor(public localization: TranslationService,
               private locale: LocaleService){
                switch(this.locale.getCurrentLocale()){
                  case "it":
                    this.displayedLocale = "ITALIAN";
                  break;
                  case "en":
                    this.displayedLocale = "ENGLISH";
                  break;
                  case "de":
                    this.displayedLocale = "GERMAN";
                  break;
                }
               }

      // *********************************** Language Methods ***********************************************
  // gets the current country.
  get currentCountry(): string {
    
        return this.locale.getCurrentCountry();
    
      }
    
      loadBaseLocale(userLanguage: string): void{
        var lang: string = userLanguage.substring(0,2);
        var country: string = userLanguage.substring(2,2);
    
        this.locale.setCurrentLanguage(lang);
        
        // note currency is not tracked, if we ever use currency then this will also need to be held within the relevant tables
        this.displayedLocale = country;
    
    
      }
    
      // sets a new locale & currency.
      selectLocale(language: string, country: string, currency: string, selectionText: string): void {
        // page will translate to new language automatically and without refreshing 
        // the power of pipes...
        this.locale.setCurrentLanguage(language);
        this.locale.setCurrentCurrency(currency);
        this.displayedLocale = country;
      }
}
