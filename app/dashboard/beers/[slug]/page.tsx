import getBeer from "@/app/lib/getBeer"

export default async function Beer({ params: { slug }}: any) {
	const beer = await getBeer(slug)

	return (
		<div>
			{beer.name}
		</div>
	)
	
}