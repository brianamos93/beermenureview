import Image from "next/image"
import Link from "next/link"

type Props = {
	key: string,
	id: string,
	name: string,
	brewery: string,
	description: string,
	origin: string,
	style: string,
	abv: number,
	ibu: number,
	author: string,
	createdAt: string
}

export default function BeerCard({ id, name, brewery, description, origin, style, abv, ibu, author, createdAt } : Props) {
	const orgdate = createdAt
	const newdate = new Date(Date.parse(orgdate))
	const finaledate = newdate.toDateString()
	return (
		<Link href={`/dashboard/beers/${encodeURIComponent(id)}`}>
			<div className="bg-white rounded-lg shadow-lg">
				<div>
					<Image src="https://images.unsplash.com/photo-1579065436839-f2bb127c5606?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={4000} height={6000} alt="Beer" className="w-full h-64 object-cover"/>
				</div>
				<div className="p-6">
					<div>
						<h2 className="font-bold mb-2 text-2xl text-purple-800">{name}</h2>
						<h3 className="font-bold mb-2 text-2xl text-purple-800">{brewery}</h3>
					</div>
					<div className="flex justify-between items-center">
						<p>Style: {style}</p>
						<p>ABV: {abv}%</p>
						<p>IBU: {ibu}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}