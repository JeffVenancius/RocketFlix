let firstTime = false;

function setPoster(link, title){
	const image__moviePoster = document.querySelector('#image__moviePoster')
	const imageBaseURL = 'https://image.tmdb.org/t/p/'
	const imageSize = 'w300'
	image__moviePoster.src = imageBaseURL + imageSize + link
	image__moviePoster.alt = title
}

function populateMovie(){
	let response = JSON.parse(this.response)
	let number = Math.floor(Math.random() * 20)
	let movie = response.results[number]

	document.querySelector("#h2__movieTitle").innerHTML = movie.title
	document.querySelector("#p__movieSynopsis").innerHTML = movie.overview
	setPoster(movie.poster_path, movie.title)
}

function getAPI(){
	let request = new XMLHttpRequest();
	let number = Math.floor(Math.random() * 300)
	let url = `https://api.themoviedb.org/3/discover/movie?api_key=e0a3f83c842caceba78e2fa2f9109d0b&sort_by=popularity.desc&page=${number}&language=pt-BR`
	request.open("get", url,true)
	request.onload = populateMovie;
	request.send()
}

function findMovie(){
	if (!firstTime) {
		const movieDetails = `
		<section id="movieDetails">
			<img id="image__moviePoster" src="" alt="">
			<div>
				<h2 id="h2__movieTitle"></h2>
				<p id="p__movieSynopsis"></p></div>
		</section>`
		let h1 = document.querySelector("h1")
		h1.insertAdjacentHTML("afterbegin", movieDetails)
		firstTime = true
	}
	getAPI()
}
