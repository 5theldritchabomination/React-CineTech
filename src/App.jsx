import moviesList from './data/moviesList.js';
import './style.css';
export default function App() {
  const moviesListf = moviesList();
  console.log(moviesListf);
  return (
    <>
      <h1 className="title">CinéTech</h1>
      <main>
        <h2>Films à l'affiche</h2>
        <ul>
          {moviesListf.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>
                {movie.year} — {movie.director}
              </p>
              <p>Note : {movie.rating}</p>
            </li>
          ))}
        </ul>
        <h2>Films coups de coeur</h2>
        <ul>
          {moviesListf
            .filter((movie) => movie.rating >= 8)
            .map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>
                  {movie.year} — {movie.director}
                </p>
                <p>Note : {movie.rating}</p>
              </li>
            ))}
        </ul>
        <h2>Films de super hero</h2>
        <ul>
          {moviesListf
            .filter((movie) => movie.genre.includes('super-hero'))
            .map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>
                  {movie.year} — {movie.director}
                </p>
                <p>Note : {movie.rating}</p>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
