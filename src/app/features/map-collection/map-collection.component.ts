import { Component, OnInit } from '@angular/core';

import { Map } from '../../app-resources/spine/map';

// services
import { LoaderService } from '../../app-resources/app-services/loader.service';
import { MapService } from '../../app-resources/app-services/map.service';

import { MessageInformation, MESSAGE_TYPE, MessagingService, MESSAGE_REQUESTOR } from '../../app-resources/app-services/messaging.service';
import { Subscription } from 'rxjs/rx';

@Component({
  selector: 'app-map-collection',
  templateUrl: './map-collection.component.html'
})
export class MapCollectionComponent implements OnInit {

    private maps: Map[] = [];
    private broadcastSubscription: Subscription;
    private setName: string;
    private mapIds: string[] = [];

    private errorMessage: string;

  constructor( private _loader: LoaderService,
                private _mapper: MapService,
                private _messenger: MessagingService) { }

  ngOnInit() {
      this._mapper.loadOwnedMaps();
      this.loadMaps();
      this.broadcastSubscription = this._messenger.broadcastMessage.subscribe(message => this.onMessageReceived(message));
  }

  private loadMaps(): void{


    this._loader.loadMapsData()
    .subscribe(foundMaps => this.maps = foundMaps),
         error => this.errorMessage = <any> error;

    
  }

  private openLookup(targetDialog: string): void{
    var msg: MessageInformation = { name: "dialogRequest", messageType:MESSAGE_TYPE.OPEN_SET_DIALOG, details: MESSAGE_REQUESTOR.MAP_COLLECTIONS , extra: [] };
    this._messenger.sendMessage(msg);
  }

  private onMessageReceived(message: MessageInformation): void{
    
        switch(message.messageType){
          case MESSAGE_TYPE.DIALOG_RESULT:
            if(message.name == MESSAGE_REQUESTOR.MAP_COLLECTIONS){
              // this is the caller!
             this.mapIds = message.details.maps;
             this.setName = message.details.name;
             
             

    
            }
    
          break;
        }
      }

    private addAllSetMaps(): void{
        if(this.mapIds.length > 0){
            for(var index: number = 0; index < this.mapIds.length; index++){
                var newMap: Map = new Map(this.mapIds[index], "");
                this._mapper.addNewOwnedMap(newMap);
            }
        }
        
            
    }
}
