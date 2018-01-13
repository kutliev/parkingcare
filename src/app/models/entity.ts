export class Entity {
	title: string;
	slug: string;
	content: string;

	constructor(title: string, slug: string, content: string){
		this.title = title;
		this.slug = slug;
		this.content = content;
	}
}