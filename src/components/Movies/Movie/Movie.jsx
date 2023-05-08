const Movie = (props) => {
	const {Poster, Title, Year, Type} = props;

	return (
		<div className="card">
			<div className="card-image waves-effect waves-block waves-light">
				<img className="activator" 
					src={Poster === 'N/A'? `https://placehold.co/400x560?text=${Title}` : Poster} 
					alt={Title} 
				/>
			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">{Title}</span>
				<div className="card-descr">
					<p>{Type}</p>
					<span>{Year}</span>
				</div>
			</div>
	  </div>
	)
}

export default Movie;