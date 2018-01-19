import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Settings } from '../models/settings'
import { Spot } from '../models/spot'
import { SpotEvent } from '../models/spotevent'


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

	getSpotEventList(spot: Spot): Observable<any> {
		let apiEndPoint = this.settings.ApiEndPoint + "object-type/spotevents/search?metafield_key=spot&metafield_value=" + spot.id + "&read_key=" + this.settings.ApiReadKey;
		console.log(apiEndPoint);
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

	saveSpot(spot: Spot): Observable<any> {
		let apiEndPoint = this.settings.ApiEndPoint + "add-object";
		let payload = {
			"write_key": this.settings.ApiWriteKey,
			"title": spot.title,
			"type_slug": "spots",
			"content": "",
			"metafields": [
				{
					"key": "type",
					"title": "Type",
					"value": spot.type
				},
				{
					"object_type": "floors",
					"key": "floor",
					"type": "object",
					"value": "5a53bd813e80773f7e000276"
				},
				{
					"object_type": "parkings",
					"key": "parking",
					"type": "object",
					"value" : "5a53bd1585c098487e00036b"
				}
			]
		};

		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let jsonPayload = JSON.stringify(payload);
		return this.http.post(apiEndPoint, jsonPayload, { headers: headers}).map((response: Response) => response.json().object);
	}

	removeSpot(spot: Spot){

		let apiEndPoint = this.settings.ApiEndPoint + "objects/" + spot.slug;
		let payload = {
			"write_key": this.settings.ApiWriteKey
		};

		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let jsonPayload = JSON.stringify(payload);
		return this.http.delete(apiEndPoint, { 
			headers: headers,
			body: jsonPayload 
		}).map((response: Response) => response.json());

	}

	getEvent(slug: string): Observable<any> {
		if(!slug || slug == ''){
			return Observable.empty<Response>();
		}
		let apiEndPoint = this.settings.ApiEndPoint + "object/" + slug + "?read_key=" + this.settings.ApiReadKey;
		return this.http.get(apiEndPoint).map((response: Response) => response.json().object);
	}

	removeEvent(spot: SpotEvent) {

		let apiEndPoint = this.settings.ApiEndPoint + "objects/" + spot.slug;
		let payload = {
			"write_key": this.settings.ApiWriteKey
		};

		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let jsonPayload = JSON.stringify(payload);
		return this.http.delete(apiEndPoint, {
			headers: headers,
			body: jsonPayload
		}).map((response: Response) => response.json());

	}

	saveEvent(spotEvent: SpotEvent, spot: Spot){
		let apiEndPoint = this.settings.ApiEndPoint + "add-object";
		let payload = {
			"write_key": this.settings.ApiWriteKey,
			"title": spotEvent.title,
			"type_slug": "spotevents",
			"content": "",
			"metafields": [
				{
					"key": "type",
					"title": "Type",
					"value": spotEvent.type
				},
				{
					"object_type": "spots",
					"key": "spot",
					"type": "object",
					"value": spot.id
				}
			]
		};

		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let jsonPayload = JSON.stringify(payload);
		return this.http.post(apiEndPoint, jsonPayload, { headers: headers }).map((response: Response) => response.json().object);

	}


	getSpotEventData(spot_slug: string, event_slug: string): Observable<any>{
		if (!event_slug) {
			return this.getSpot(spot_slug);
		} else {
			return Observable.forkJoin(this.getSpot(spot_slug), this.getEvent(event_slug));
		}
	}

}
