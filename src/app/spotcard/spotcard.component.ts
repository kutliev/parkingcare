import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spot } from '../models/spot';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-spotcard',
  templateUrl: './spotcard.component.html',
  styleUrls: ['./spotcard.component.css']
})
export class SpotcardComponent implements OnInit {

  selectedSpot: Spot;

  constructor(
  		private route: ActivatedRoute,
  		private dataService: DataService,
  	) { }

  ngOnInit(): void {
	  this.getSpot();
  }

	getSpot(): void{
		let spotId = this.route.snapshot.paramMap.get('spot_id');
		if (spotId) {
			this.dataService.getSpot(spotId).subscribe(spot => { 
				this.selectedSpot = new Spot(spot._id, spot.title, spot.slug, spot.content, spot.metadata.floor.title, spot.metadata.type); 
			});
		}
	}

}
