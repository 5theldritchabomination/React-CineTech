import MovieCard from './MovieCard';
import Section from './Section';

export default function MovieList({ movies }) {
  const moviesListf = movies();
  console.log(moviesListf);
  return (
    <main className="max-w-7xl mx-auto mt-6">
      <Section title={'Film du moment'}>
        <ul className="justify-content-center">
          {moviesListf
            .filter((movies) => movies.id == 5)
            .map((movies) => (
              <li
                key={movies.id}
                className="bg-gray-100 rounded-l p-4 shadow justify-items-center justify-self-center animate-ping"
              >
                <h3 className="text-3xl font-semi-bold">{movies.title}</h3>
                <p className="text-sm text-gray-600">
                  {movies.year} — {movies.director}
                </p>
                <p>{movies.synopsis}</p>
                <p className="mt-2 text-blue-300">Note : {movies.rating}</p>
                <img
                  src={movies.poster}
                  className="w-all h-25 object-cover rounded"
                ></img>
              </li>
            ))}
        </ul>
      </Section>
      <Section title={"Films à l'affiche"}>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesListf.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </ul>
      </Section>
      <Section title={'Films de super hero'}>
        <h2 className="text-2xl font-bold mb-4">Films coups de coeur</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesListf
            .filter((movies) => movies.rating >= 8)
            .map((movie) => (
              <MovieCard movie={movie} />
            ))}
        </ul>
      </Section>
      <Section title={'Films de super hero'}>
        <h2 className="text-2xl font-bold mb-4"></h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesListf
            .filter((movies) => movies.genre.includes('super-hero'))
            .map((movie) => (
              <MovieCard movie={movie} />
            ))}
        </ul>
      </Section>
    </main>
  );
}
