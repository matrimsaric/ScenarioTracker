export enum SCENARIO_TYPE{
    UNKNOWN = 0,
    EXIT_POINTS = 1,
    CAPTURE_OR_HOLD = 2,
    BUG_HUNT = 3
}


export class Scenario {
    private id: number;
    private name: string;
    private producer: string;
    private designer: string;
    private set: string;
    private yearDesigned: number;
    private yearSet: number;
    private nationality: string[];
    private units: string[];
    private maps: string[];
    private oba: boolean = false;
    private sea: boolean = false;
    private night: boolean = false;
    private campaign: boolean = false;
    private artillery: boolean = false;
    private vehicles: boolean = false;
    private scenarioType: SCENARIO_TYPE = SCENARIO_TYPE.UNKNOWN;

    private played: Date[];
    private playedNotes: string[];
    private rating: number;
    private playAgain: boolean = true;

}
