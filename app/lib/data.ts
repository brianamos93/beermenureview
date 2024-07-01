export async function GetAllReviews () {
	try {
		const res = await fetch('https://65965ce06bb4ec36ca0272c1.mockapi.io/api/reviews')
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		return res.json()
	} catch (error) {
		console.log('Backend Error:', error)
	}
}

export async function GetAllBeers () {
	try {
		const url = new URL('https://667d60b4297972455f64dd56.mockapi.io/api/beer')
		url.searchParams.append('page', '1')
		url.searchParams.append('limit', '10')
		const res = await fetch(url, {
			method: 'GET',
			headers: {'content-type': 'application/json'},
		})
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		return res.json()
	} catch (error) {
		console.log('Backend Error:', error)
	}
}