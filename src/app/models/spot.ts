import { Entity } from './entity'
import { SpotEvent } from './spotevent'

export class Spot extends Entity {
	
	floor: string;
	type: string;
	payments: SpotEvent[];
	cleanings: SpotEvent[];
	maintenances: SpotEvent[];

	constructor(id: string, title: string, slug: string, content: string, floor: string, type: string){
		super(id, title, slug, content);
		this.floor = floor;
		this.type = type;
		this.payments = [];
		this.cleanings = [];
		this.maintenances = [];
	}
}