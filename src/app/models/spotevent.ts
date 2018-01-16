import { Entity } from './entity';

export class SpotEvent extends Entity {
	
	type: string;
	created: Date;
	
	constructor(id: string, title: string, slug: string, content: string, type: string, created: Date){
		super(id, title, slug, content);
		this.type = type;
		this.created = created;
	}

}
