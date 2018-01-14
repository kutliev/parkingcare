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

	getSpot(slug: string): Observable<any> {
		let apiEndPoint = this.settings.ApiEndPoint + "object/" + slug + "?read_key=" + this.settings.ApiReadKey;
		return this.http.get(apiEndPoint).map((response: Response) => response.json().object);
	}

//"write_key": this.settings.ApiWriteKey,


	saveSpot(spot: Spot): Observable<any> {
		let apiEndPoint = this.settings.ApiEndPoint + "add-object";
		let payload = {
			"write_key": this.settings.ApiWriteKey,
			"title": spot.title,
			"type_slug": "spots",
			"content": "",
			"metafields": [
				{
					"key": "Floor",
					"type": "floor",
					"value": spot.floor
				},
				{
					"key": "Type",
					"type": "type",
					"value": spot.type
				}
			]
		};

		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');

		console.log('Headers');
		console.log(headers);

		let jsonPayload = JSON.stringify(payload);
		console.log('JSON payload');
		console.log(jsonPayload);

		return this.http.post(apiEndPoint, jsonPayload, { headers: headers}).map((response: Response) => response.json().object);
	}
}
