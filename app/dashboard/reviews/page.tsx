import { GetAllReviews } from "@/app/lib/data";
import { Review } from "@/app/lib/definitions";

export default async function Page() {
	const reviews = await GetAllReviews();
	return (
		<div className="">
			{reviews.map((review: Review) => (
				<div className=""
				key={review.id}
				>
					<div><h2 className="text-xl">{review.title}</h2></div>
					<div><p>{review.body}</p></div>
				</div>
			))}
		</div>
	)
  }