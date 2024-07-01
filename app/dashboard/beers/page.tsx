import BeerCard from "@/app/ui/dashboard/beercard";
import { GetAllBeers } from "@/app/lib/data";
import { Beer } from "@/app/lib/definitions";


export default async function Page() {
	const allbeers = await GetAllBeers();
	return (
		<div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			{allbeers.map((beer: Beer) => (
				<BeerCard
				key={beer.id}
				name={beer.name}
				brewery={beer.brewery}
				description={beer.description}
				origin={beer.origin}
				abv={beer.abv}
				ibu={beer.ibu}
				createdAt={beer.createdAt}
				author={beer.author}
				style={beer.style}
				id={beer.id}
				/>
			))}
		</div>
	)
  }