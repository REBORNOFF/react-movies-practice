import React from "react";

class Search extends React.Component {
	state = {
		search: '',
		typeMovie: 'all'
	}

	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.inputSearch(this.state.search, this.state.typeMovie);
		}
	}

	selectTypeMovie = (event) => {
		this.setState(() => ({typeMovie: event.target.value}), () => {
			this.props.inputSearch(this.state.search, this.state.typeMovie);
		});
	}


	render() {
		return (
			<div className="input-field col s12">
				<input 
					className="search" 
					type="search" 
					placeholder="Search" 
					value={this.state.search}
					onChange={(event) => this.setState({search: event.target.value})}
					onKeyDown={this.handleKey}
				/>
				<button 
					className="btn search-btn"
					onClick={() => this.props.inputSearch(this.state.search, this.state.typeMovie)}
				>
                    Search
                </button>
				<div className="block-search">
					<div className="search-type">
						<label className="label-type">
						<input 
							className="with-gap"
							type="radio" 
							name="typeMovie" 
							value="all"
							checked={this.state.typeMovie === 'all' ? true : false}
							onChange={this.selectTypeMovie} 
						/>
							<span>All</span>
						</label>
						<label className="label-type">
							<input 
								className="with-gap"
								name="movies" 
								type="radio" 
								value='movie'
								checked={this.state.typeMovie === 'movie' ? true : false}
								onChange={this.selectTypeMovie}
							/>
							<span>Movie</span>
						</label>
						<label className="label-type">
							<input 
								className="with-gap"
								name="series" 
								type="radio" 
								value='series'
								checked={this.state.typeMovie === 'series' ? true : false}
								onChange={this.selectTypeMovie}
							/>
							<span>Series</span>
						</label>
					</div>
					<div className="search-result">
						<span>Total found: <span className="search-result-bold">{this.props.totalResults}</span></span>
					</div>
				</div>
		  	</div>
		);
	}
}

export default Search;