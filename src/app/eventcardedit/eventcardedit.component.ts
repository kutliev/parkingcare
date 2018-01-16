import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Spot } from '../models/spot';
import { SpotEvent } from '../models/spotevent';
import { DataService } from '../services/data.service';
import { EventTypes } from '../models/settings';


@Component({
  selector: 'app-eventcardedit',
  templateUrl: './eventcardedit.component.html',
  styleUrls: ['./eventcardedit.component.css']
})
export class EventcardeditComponent implements OnInit {

	selectedEvent: SpotEvent = new SpotEvent('', '', '', '', '', new Date());
	eventTypes: string[];

	constructor(
		private route: ActivatedRoute,
		private dataService: DataService,
		private router: Router
	) { }

  ngOnInit() {
	  this.eventTypes = EventTypes;
  }

}
