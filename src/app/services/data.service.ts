import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Settings } from '../models/settings'
import { Spot } from '../models/spot'


@Injectable()
export class DataService {

  constructor(private http: Http, private settings: Settings) { }

  getSpotData(): Observable<any>{
	  let apiEndPoint = this.settings.ApiEndPoint + "object-type/spots" + "?read_key=" + this.settings.ApiReadKey;
	  return this.http.get(apiEndPoint).map((response: Response) => response.json().objects);
  }

	getSpotEvents(): Observable<any> {
		let apiEndPoint = this.settings.ApiEndPoint + "object-type/spotevents" + "?read_key=" + this.settings.ApiReadKey;
		return this.http.get(apiEndPoint).map((response: Response) => response.json().objects);
	}

  spotList: Spot[] = [];

	getSpots(): Observable<any> {
		return Observable.forkJoin(this.getSpotData(), this.getSpotEvents());

  }

}
