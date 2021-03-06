import { Component, OnInit } from '@angular/core';

import { Producer } from '../../../app-resources/spine/producer';

// servie to load data
import { LoaderService } from '../../../app-resources/app-services/loader.service';
import { GlobalService } from '../../../app-resources/app-services/global.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styles: []
})
export class ProducerComponent implements OnInit {

  private allProducers: Producer[] = [];
  private errorMessage: string;
  private showSearch: boolean = true;
  private showDetails: boolean = null;

  constructor(private _loader: LoaderService,
    private _globals: GlobalService) { }

    ngOnInit() {
    this._loader.loadProducerData()
    .subscribe(sets => this.allProducers = sets),
    error => this.errorMessage = <any> error;
    }

    private selectLine(chosenValue: any): void{

    this._globals.dialogResult = chosenValue;
    }

}
