import { Entity } from './entity';

export class SpotEvent extends Entity {
	
	type: string;
	created: Date;
	
	constructor(title: string, slug: string, content: string, type: string, created: Date){
		super(title, slug, content);
		this.type = type;
		this.created = created;
	}

}
