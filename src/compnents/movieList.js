import './movieList.css';
import MoviesDetails from './movieDetail';

function MovieList({ movieData }) {
    return (
        movieData.map((movie, index, title, year) => {
            return (
                <div key={index} className="poster">
                    <img src={movie["Poster"]} />
                    <MoviesDetails
                        title={movie["Title"]}
                        year={movie["Year"]}
                    />
                </div>
            )
        })
    )
}

export default MovieList