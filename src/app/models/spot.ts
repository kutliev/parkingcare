import { Entity } from './entity'
import { SpotEvent } from './spotevent'

export class Spot extends Entity {
	
	number: string;
	events: SpotEvent[];

}