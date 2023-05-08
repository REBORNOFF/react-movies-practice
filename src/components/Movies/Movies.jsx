import Movie from "./Movie/Movie";

const Movies = (props) => {
	const { moviesArray = [] } = props;

	return (
		<div className="movies">
			{
				moviesArray.length 
					? moviesArray.map(movie => <Movie key={movie.imdbID} {...movie} />)
					: <h4>Movie not found</h4> 
			}
		</div>
	);
}

export default Movies;