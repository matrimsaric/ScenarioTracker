import { Injectable, EventEmitter } from '@angular/core';


export enum MESSAGE_TYPE{
    UNKNOWN = 0,
    OPEN_SET_DIALOG = 1,
    OPEN_PRODUCER_DIALOG = 2,
    DIALOG_RESULT = 3,
    OPEN_NATIONALITY_DIALOG = 4
}

export enum MESSAGE_REQUESTOR{
  UNKNOWN = 0,
  SCENARIO_ENTRY = 1,
  MAP_COLLECTIONS = 2
}

// class to contain enough generic info to allow the majority of components
// to talk to one another. Note We can have multiples if performance reasons demand it
// or something requires a more nuanced object set
export class MessageInformation{
    constructor(public messageType: MESSAGE_TYPE, public name: any, public details: any, public extra?: any[]){

    }
}


@Injectable()
export class MessagingService {

    public broadcastMessage: EventEmitter<MessageInformation>;
    public resetExpandIcon: EventEmitter<string>;
    public validationFires: EventEmitter<string>;
    public validationOpensWindow: EventEmitter<any>;
    public frameInformationRequest: EventEmitter<MessageInformation>;

    constructor(){
        this.broadcastMessage = new EventEmitter<MessageInformation>();
        this.frameInformationRequest = new EventEmitter<MessageInformation>();
        this.resetExpandIcon = new EventEmitter<string>();
        this.validationFires = new EventEmitter<string>();
        this.validationOpensWindow = new EventEmitter<any>();
    
    }

    // allows individual frames to talk to other frames.
    public sendMessage(message: MessageInformation): void{
        this.broadcastMessage.emit(message);
    }



}




