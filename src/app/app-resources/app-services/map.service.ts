import { Injectable, OnInit } from '@angular/core';

import { Map } from '../../app-resources/spine/map';

@Injectable()
export class MapService implements OnInit {

    private ownedMaps: Map[]= [];

  constructor() { }

  ngOnInit(): void{
      this.loadOwnedMaps();
  }

  public loadOwnedMaps(): void{
      // TODO
      var testMap: Map = new Map("5","Beyond Valor");
      this.ownedMaps.push(testMap);
      console.log('loading owned maps: IMPLEMENT');
  }

  public isMapOwned(testMap: string): boolean{
      var foundMap = this.ownedMaps.filter(mapRecord => mapRecord.id.toString().trim() == testMap);

      if(foundMap.length > 0){
          return true;
      } else{
          return false;
      }
  }

  public addNewOwnedMap(newOwnedMap: Map): void{
      // check not already added
      var foundMap = this.ownedMaps.filter(mapRecord => mapRecord.id.toString().trim() == newOwnedMap.id);
      
      if(!foundMap){
          this.ownedMaps.push(newOwnedMap);
      }

      // TODO SAVE
      console.log('saving owned maps: IMPLEMENT');


  }

  public removeMapFromCollection(removeMap: Map): void{
    for(var index:number = 0; index < this.ownedMaps.length; index++){
        if(this.ownedMaps[index].id == removeMap.id){
            this.ownedMaps.splice(index,1);
        }
    }

    // TODO SAVE
    console.log('saving owned maps: IMPLEMENT');

  }

}
