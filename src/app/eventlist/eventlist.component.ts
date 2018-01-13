import { Component, OnInit, Input } from '@angular/core';
import { SpotEvent } from '../models/spotevent';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

	private _spotEvents: SpotEvent[] = [];

	@Input()
	set spotevents(spotevents: SpotEvent[]) {
		this._spotEvents = spotevents;
	}
	get spotevents(): SpotEvent[] {
	 return this._spotEvents; 
	}
  
  constructor() { }
  
  ngOnInit() {
  }

}
