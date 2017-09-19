import { Component, OnInit, OnDestroy } from '@angular/core';

// class to hold scenario object
import { Scenario, SCENARIO_TYPE } from '../../app-resources/spine/scenario';
import { Map } from '../../app-resources/spine/map';

import { MessageInformation, MESSAGE_TYPE, MessagingService, MESSAGE_REQUESTOR } from '../../app-resources/app-services/messaging.service';
import { Subscription } from 'rxjs/rx';

// services
import { LoaderService } from '../../app-resources/app-services/loader.service';

// language
import { Language, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-scenario-entry',
  templateUrl: './scenario-entry.component.html',
  styleUrls: ['./scenario-entry.component.css']
})
export class ScenarioEntryComponent implements OnInit, OnDestroy {

  @Language() lang: string;
  private masterScenario: Scenario;
  private broadcastSubscription: Subscription;
  private currentLookup: MESSAGE_TYPE = MESSAGE_TYPE.UNKNOWN;
  private setName: string = "";
  private producerName: string = "";

  // additional params
  private scenarioSize: string = "";
  private theatreOfOperations: string = "";

  private errorMessage: string = "";
  

  constructor(  private _messenger: MessagingService,
                private _translator: TranslationService,
                private _loader: LoaderService) { 

 }

  ngOnInit() {
      this.masterScenario = new Scenario();
      this.broadcastSubscription = this._messenger.broadcastMessage.subscribe(message => this.onMessageReceived(message));
      

    }

  ngOnDestroy(): void{

  }

  
  private onMessageReceived(message: MessageInformation): void{

    switch(message.messageType){
      case MESSAGE_TYPE.DIALOG_RESULT:
        if(message.name == MESSAGE_REQUESTOR.SCENARIO_ENTRY){
          // this is the caller!
          switch(this.currentLookup){
              case MESSAGE_TYPE.OPEN_SET_DIALOG:
                this.masterScenario.set = message.details.id;
                this.setName = message.details.name;
                break;
              case MESSAGE_TYPE.OPEN_PRODUCER_DIALOG:
                this.masterScenario.producer = message.details.id;
                this.producerName = message.details.name;
          }

        }

      break;
    }
  }


    private openLookup(targetDialog: string): void{
      this.currentLookup = MESSAGE_TYPE.UNKNOWN;
      switch(targetDialog){
        case "producer":
          this.currentLookup = MESSAGE_TYPE.OPEN_PRODUCER_DIALOG;
        break;
        case "set":
          this.currentLookup = MESSAGE_TYPE.OPEN_SET_DIALOG;
        break;
      }

      var msg: MessageInformation = { name: "dialogRequest", messageType:this.currentLookup, details: MESSAGE_REQUESTOR.SCENARIO_ENTRY , extra: [] };
      this._messenger.sendMessage(msg);
    }

    private getSetName(): void{

    }

    private addMap(newMap: string): void{
        
        var existingMap: Map;
        
        // need to add a new map. Check for existance in source file
        this._loader.loadIndividualMap(newMap)
        .subscribe(returnedMap => this.addNewMap(returnedMap, newMap)),
        error => this.errorMessage = <any> error;

        

        
    }

    private addNewMap(returnedMap: Map, mapId: string): void{

        if(returnedMap){
            this.masterScenario.maps.push(returnedMap);
        }
        else{
            var set: string = this._translator.translate("UNKNOWN");
            var addedMap: Map = new Map(mapId, set);
            // otherwise leave as unknown and just add
            this.masterScenario.maps.push(addedMap);
        }
    }

    private removeMap(obsoleteMap: Map): void{
        // loop to find
        for(var index: number = 0; index < this.masterScenario.maps.length; index++){
            if(this.masterScenario.maps[index].id == obsoleteMap.id){
                this.masterScenario.maps.splice(index,1);
            }
        }
    }

}
