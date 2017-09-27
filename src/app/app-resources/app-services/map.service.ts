import { Injectable, OnInit } from '@angular/core';

import { Map } from '../../app-resources/spine/map';
import { FirebaseService } from './firebase.service';

@Injectable()
export class MapService implements OnInit {

    public ownedMaps: string[] = [];

  constructor(private _firebase: FirebaseService) { }

  ngOnInit(): void{

  }


  public isMapOwned(testMap: string): boolean{
      var foundMap = this.ownedMaps.filter(mapRecord => mapRecord.toString().trim() == testMap);

      if(foundMap.length > 0){
          return true;
      } else{
          return false;
      }
  }

  public addNewOwnedMap(newOwnedMap: string): void{
      // check not already added
      var foundMap = this.ownedMaps.filter(mapRecord => mapRecord.toString().trim() == newOwnedMap);
      
      if(!foundMap || (foundMap && foundMap.length == 0)){
          this.ownedMaps.push(newOwnedMap);
          this.saveMaps();
      }


      


  }

  public removeMapFromCollection(removeMap: string): void{
    for(var index:number = 0; index < this.ownedMaps.length; index++){
        if(this.ownedMaps[index] == removeMap){
            this.ownedMaps.splice(index,1);
        }
    }

    this.saveMaps();

  }

  private saveMaps(): void{
      // use aray to build a stirng
      var saveThis: string = "";

      for(var index: number = 0; index < this.ownedMaps.length; index++){
          saveThis = saveThis + this.ownedMaps[index] + ",";
      }

      if(saveThis.length > 0){
          saveThis = saveThis.substring(0, saveThis.length -1);
          this._firebase.saveMap(saveThis);
      }
  }

}
