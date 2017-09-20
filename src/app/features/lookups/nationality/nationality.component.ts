import { Component, OnInit } from '@angular/core';

import { Nationality } from '../../../app-resources/spine/nationality';

// servie to load data
import { LoaderService } from '../../../app-resources/app-services/loader.service';
import { GlobalService } from '../../../app-resources/app-services/global.service';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styles: []
})
export class NationalityComponent implements OnInit {

  private allNations: Nationality[] = [];
  private errorMessage: string;
  private showSearch: boolean = true;
  private showDetails: boolean = null;

  constructor(private _loader: LoaderService,
    private _globals: GlobalService) { }

    ngOnInit() {
    this._loader.loadNationData()
    .subscribe(sets => this.allNations = sets),
    error => this.errorMessage = <any> error;
    }

    private selectLine(chosenValue: any): void{

    this._globals.dialogResult = chosenValue;
    }

}
