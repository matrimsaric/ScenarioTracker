import { Map } from './map';

export enum SCENARIO_TYPE{
    UNKNOWN = 0,
    EXIT_POINTS = 1,
    CAPTURE_OR_HOLD = 2,
    BUG_HUNT = 3
}


export class Scenario {
    public id: number;
    public name: string;
    public producer: string;
    public designer: string;
    public set: string;
    public yearDesigned: number;
    public yearSet: number;
    public nationality: string[];
    public units: string[];
    public maps: Map[] = [];
    public oba: boolean = false;
    public sea: boolean = false;
    public night: boolean = false;
    public campaign: boolean = false;
    public artillery: boolean = false;
    public vehicles: boolean = false;
    public scenarioType: SCENARIO_TYPE = SCENARIO_TYPE.UNKNOWN;
    public block: boolean = false;
    public cave: boolean = false;
    public bocage: boolean = false;

    public played: Date[];
    public playedNotes: string[];
    public rating: number;
    public playAgain: boolean = true;

}
