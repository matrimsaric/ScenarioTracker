import { Component, OnInit, OnDestroy } from '@angular/core';

// class to hold scenario object
import { Scenario, SCENARIO_TYPE } from '../../app-resources/spine/scenario';

import { MessageInformation, MESSAGE_TYPE, MessagingService, MESSAGE_REQUESTOR } from '../../app-resources/app-services/messaging.service';
import { Subscription } from 'rxjs/rx';

@Component({
  selector: 'app-scenario-entry',
  templateUrl: './scenario-entry.component.html',
  styleUrls: ['./scenario-entry.component.css']
})
export class ScenarioEntryComponent implements OnInit, OnDestroy {

  private masterScenario: Scenario;
  private broadcastSubscription: Subscription;
  private currentLookup: MESSAGE_TYPE = MESSAGE_TYPE.UNKNOWN;
  private setName: string = "";
  private producerName: string = "";

  constructor(private _messenger: MessagingService) { }

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

}
