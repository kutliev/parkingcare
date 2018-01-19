import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spot } from '../models/spot';
import { SpotEvent } from '../models/spotevent';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-spotcard',
  templateUrl: './spotcard.component.html',
  styleUrls: ['./spotcard.component.css']
})
export class SpotcardComponent implements OnInit {

  selectedSpot: Spot = new Spot('', '', '', '', '', '');
  spotEventList: SpotEvent[] = [];

  constructor(
  		private route: ActivatedRoute,
  		private dataService: DataService,
  	) { }

  ngOnInit(): void {

    let spotId = this.route.snapshot.paramMap.get('spot_slug');

	  this.getSpot(spotId);
    
  }

	getSpot(spotId: string): void {
			this.dataService.getSpot(spotId).subscribe(spot => { 
				this.selectedSpot = new Spot(spot._id, spot.title, spot.slug, spot.content, spot.metadata.floor.title, spot.metadata.type); 
        this.getEvents(this.selectedSpot);
			});
	}

  getEvents(spot: Spot): void {

    console.log(spot);
      this.dataService.getSpotEventList(spot).subscribe(spotEventList => {
                //this.spotEventList = spotEventList;


      for (let spotEvent of spotEventList.sort((a, b) => a.created - b.created)) {

        let currentEvent = new SpotEvent(spotEvent._id, spotEvent.title, spotEvent.slug, spotEvent.content, spotEvent.metadata.type, spotEvent.created);

        switch (spotEvent.metadata.type) {
          case "Payment":
            // code...
            this.selectedSpot.payments.push(currentEvent);
            break;

          case "Cleaning":
            // code...
            this.selectedSpot.cleanings.push(currentEvent);
            break;

          case "Maintenance":
            // code...
            this.selectedSpot.maintenances.push(currentEvent);
            break;

          default:
            // code...
            break;
        }
      }

             });   
  }

}
