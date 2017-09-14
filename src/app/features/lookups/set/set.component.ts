import { Component, OnInit } from '@angular/core';

import { Set } from '../../../app-resources/spine/set';

// servie to load data
import { LoaderService } from '../../../app-resources/app-services/loader.service';
import { GlobalService } from '../../../app-resources/app-services/global.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html'
})
export class SetComponent implements OnInit {

  private allSets: Set[] = [];
  private errorMessage: string;
  private showSearch: boolean = true;
  private showDetails: boolean = null;

  constructor(private _loader: LoaderService,
              private _globals: GlobalService) { }

  ngOnInit() {
    this._loader.loadSetData()
    .subscribe(sets => this.allSets = sets),
      error => this.errorMessage = <any> error;
  }

  private selectLine(chosenValue: any): void{
    
    this._globals.dialogResult = chosenValue;
  }

}
