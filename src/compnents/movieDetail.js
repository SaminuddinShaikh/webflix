import './moviesDetail.css';

function MoviesDetails({ title, year }) {
    <div className="movie-detail">
        <h1 className="movie-title">{title}</h1>
        <h1 className="movie-year">{year}</h1>
    </div>
}

export default MoviesDetails;