export type Beer = {
	id: string,
	createdAt: string,
	name: string,
	brewery: string,
	description: string,
	origin: string,
	color: string,
	abv: number,
	ibu: number,
	author: string,
	style: string

}

export type Review = {
	id: string,
	title: string,
	body: string,
	date_created: Date,
	date_updated: Date,
	author: string
}