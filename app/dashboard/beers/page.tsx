import BeerCard from "@/app/ui/dashboard/beercard";
import { GetAllBeers } from "@/app/lib/data";
import { Beer } from "@/app/lib/definitions";


export default async function Page() {
	const allbeers = await GetAllBeers();
	return (
		<div className="flex flex-col justify-center items-center gap-8">
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
				/>
			))}
		</div>
	)
  }