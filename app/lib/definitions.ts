export type Beer = {
	id: string,
	createdAt: Date,
	name: string,
	brewery: string,
	description: string,
	origin: string,
	color: string,
	abv: number,
	ibu: number

}

export type Review = {
	id: string,
	title: string,
	body: string,
	date_created: Date,
	date_updated: Date,
	author: string
}