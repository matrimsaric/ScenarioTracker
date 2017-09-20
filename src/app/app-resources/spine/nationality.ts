export class Nationality {
    "id": string;
    "name": string;
    "picture": string = "";
    
    

    constructor(thisId: string, thisName: string){
            this.id = thisId;
            this.name = thisName;
        }
}
