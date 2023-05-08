import React from "react";
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";
import Loader from "../../components/Loader/Loader";

const API_KEY = process.env.REACT_APP_API;

class Main extends React.Component {
	state = {
		movies: [],
		totalResults: 0,
		isLoading: true
	}

	onFetch = (str, typeMoves='all') => {
		this.setState({isLoading: true});

		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${typeMoves !== 'all' ? `&type=${typeMoves}` : ''}`)
      		.then(response => response.json())
      		.then(data => this.setState({movies: data.Search, isLoading: false, totalResults: data.totalResults}))
			.catch(error => {
				console.error(error);
				this.setState({isLoading: false});
		})
	}

	componentDidMount() {
		this.onFetch('matrix', 'all')
	}

	inputSearch = (str = 'matrix', typeMoves='all') => {
		this.onFetch(str, typeMoves);
	}

	render() {
		const { movies, isLoading, totalResults } = this.state;

		return <main className="container content">
			<Search inputSearch={this.inputSearch} totalResults={totalResults} />
			{
				isLoading
				? <Loader />
				: <Movies moviesArray={movies} />
			}
		</main>
	}
}

export default Main;