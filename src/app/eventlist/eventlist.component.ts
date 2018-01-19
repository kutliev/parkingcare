import { Component, OnInit, Input } from '@angular/core';
import { SpotEvent } from '../models/spotevent';
import { DataService } from '../services/data.service';

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
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {  }

	removeEvent(event: SpotEvent){
		if (confirm('Spot event will be removed. Continue?')) {
			this.dataService.removeEvent(event).subscribe(result => {
				if (result.status == "200") {
					this.spotevents = this._spotEvents.filter(x => x != event);
				}
			});
		}
	}

}
