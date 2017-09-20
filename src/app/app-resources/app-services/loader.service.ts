import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

// classes to hold return items
import { Set } from '../spine/set';
import { Producer } from '../spine/producer';
import { Nationality } from '../spine/nationality';
import { Map } from '../spine/map';

@Injectable()
export class LoaderService {
  private _nationalityUrl = '/assets/lists/nationality.json';
  private _setUrl = '/assets/lists/set.json';
  private _nationUrl = '/assets/lists/nationality.json';
  private _producerUrl = '/assets/lists/producer.json';
  private _mapUrl = '/assets/lists/maps.json';
  public currentVersion:string =  "0.0.0";

  constructor( private _http: Http ) { }

  public loadSetData() : Observable<Set[]> {
    return this._http.get(this._setUrl)
        .map((response: Response) => <Set[]>response.json())
        // .do(data => console.log("RopeData: " + JSON.stringify(data)))
        .catch(error => this.handleError(error));
  }

  public loadNationData() : Observable<Nationality[]> {
    return this._http.get(this._nationUrl)
        .map((response: Response) => <Nationality[]>response.json())
        // .do(data => console.log("RopeData: " + JSON.stringify(data)))
        .catch(error => this.handleError(error));
  }

  public loadProducerData() : Observable<Producer[]> {
    return this._http.get(this._producerUrl)
        .map((response: Response) => <Producer[]>response.json())
        // .do(data => console.log("RopeData: " + JSON.stringify(data)))
        .catch(error => this.handleError(error));
  }

  public loadMapsData() : Observable<Map[]> {
    return this._http.get(this._mapUrl)
        .map((response: Response) => <Map[]>response.json())
        // .do(data => console.log("RopeData: " + JSON.stringify(data)))
        .catch(error => this.handleError(error));
  }


  public loadIndividualMap(id: string): any{
    return this._http.get(this._mapUrl)
        .map((response: Response) => <Map>response.json().filter(map => map.id == id)[0])
        //.do(data => console.log("Ind: " + JSON.stringify(data)))
        .catch(this.handleError);
}

  private handleError(error: any){
    // translate error message into valid json
     var retError: any = error;
     var retErrorBody: any = JSON.parse(retError._body);

    
    
    return Observable.throw(error.json().error || 'Server error');
}
}
