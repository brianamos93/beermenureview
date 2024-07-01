import { api_string } from "./data"

export default async function getBeer(beerSlug: string) {
	const res = await fetch(`${api_string}/beer/${beerSlug}`)
	
	if(!res.ok) throw new Error('Failed to fetch beer')
		return res.json()
}