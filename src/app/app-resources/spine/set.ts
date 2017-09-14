export class Set {
    "id": string;
    "name": string;
    "producer": string;
    "version": number;
    "boxart": string;
    "maps": number[] = [];
    "scenarios": string[] = [];
    

    constructor(thisId: string, thisName: string, thisProducer: string, thisVersion: number, thisBoxArt: string,
        thisMaps: number[], thisScenarios: string[]){
            this.id = thisId;
            this.name = thisName;
            this.version = thisVersion;
            this.boxart = thisBoxArt;
            this.maps = thisMaps;
            this.scenarios = thisScenarios;
            this.producer = thisProducer;
        }
}
