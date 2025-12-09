import MovieCard from './MovieCard';

export default function MovieList({ movies, filter }) {
  const moviesListf = movies();
  const filteredMovies = filter
    ? moviesListf.filter(filter) // filter est une fonction
    : moviesListf;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
      {filteredMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
}
