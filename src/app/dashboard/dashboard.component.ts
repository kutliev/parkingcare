import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Spot } from '../models/spot';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) { }

  spots: Spot[] = [];

  ngOnInit() {
	  this.dataService.getSpots().subscribe(result => {

		  let rawSpots = result[0];

		  //Data transformation

		  for (let rawSpot of rawSpots.sort((a, b) => a.title - b.title)) {

			  let spot = new Spot();
			  spot.title = rawSpot.title;

			  //add events
			  this.spots.push(spot);
		  }

		  //console.log(this.spots);
	  });;
  }

}
