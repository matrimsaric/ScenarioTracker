import { Component, OnInit, Input } from '@angular/core';

import { Map } from '../../../app-resources/spine/map';

import { MapService } from '../../../app-resources/app-services/map.service';

@Component({
  selector: 'app-map-button',
  templateUrl: './map-button.component.html',
  styleUrls: ['./map-button.component.css']
})
export class MapButtonComponent implements OnInit {

    @Input() currentMap: Map;
    private owned: boolean = false;

  constructor(private _loader: MapService) { }

  ngOnInit() {
    this.checkMapOwnership();
  }

  private checkMapOwnership(): void{
    this.owned = this._loader.isMapOwned(this.currentMap.id);

    
  }

  private changeOwnership(adjustment: string): void{
      if(adjustment == "add"){
            this._loader.addNewOwnedMap(this.currentMap.id);
            this.owned = true;
      }
      else{
        this._loader.removeMapFromCollection(this.currentMap.id);
        this.owned = false;
      }
      
      
  }

}
