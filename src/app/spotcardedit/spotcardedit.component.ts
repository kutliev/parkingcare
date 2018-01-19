import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Spot } from '../models/spot';
import { DataService } from '../services/data.service';
import { SpotTypes } from '../models/settings';

@Component({
  selector: 'app-spotcardedit',
  templateUrl: './spotcardedit.component.html',
  styleUrls: ['./spotcardedit.component.css']
})
export class SpotcardeditComponent implements OnInit {

	selectedSpot: Spot = new Spot('', '', '', '', 'GroundFloor', 'Vacant');
	spotTypes: string[];
	spotFloors: string[];

	constructor(
	  private route: ActivatedRoute,
	  private dataService: DataService,
	  private router: Router
	) { }

	ngOnInit() {
	  	this.getSpot();
		this.spotTypes = SpotTypes;

		//TODO: refactor to service
		this.spotFloors = ['GroundFloor']
	}

	getSpot(): void {
		let spotId = this.route.snapshot.paramMap.get('spot_id');
		if (spotId) {
			this.dataService.getSpot(spotId).subscribe(spot => {
				this.selectedSpot = new Spot(spot._id, spot.title, spot.slug, spot.content, spot.metadata.floor.title, spot.metadata.type);
			});
		}
	}

	saveSpot(): void {
		let spotId = this.route.snapshot.paramMap.get('slug');
		if (spotId) {
			// this.dataService.getSpot(spotId).subscribe(spot => {
			// 	this.selectedSpot = new Spot(spot.title, spot.slug, spot.content, spot.metadata.floor.title, spot.metadata.type);
			// });
			console.log('Update');
		}else{

			this.dataService.saveSpot(this.selectedSpot).subscribe(result => {
				console.log('Result');
				console.log(result);
				this.router.navigate(['/']);
			});
		}
	}
}
