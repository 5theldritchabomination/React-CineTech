import MovieList from './components/MovieList.jsx';
import moviesList from '/var/www/html/cinetech-react/src/data/moviesList.js';
import Section from './components/Section.jsx';
import Counter from './components/Counter.jsx';

export default function App() {
  const moviesListf = moviesList();
  return (
    <>
      <div className="bg-blue-600 flex flex-cols-3 sm:flex-cols-3 gap-6">
        <div className="bg-blue-500 p-4 rounded-xl size-15 flex-none">home</div>
        <div className="bg-green-500 p-4 rounded-xl size-15 flex-none">
          films
        </div>
        <div className="bg-red-500 p-4 rounded-xl size-15">plus</div>
        <div className="p-4 grow"></div>
        <div className="bg-blue-200 p-4 rounded-xl size-15 flex-none">
          Connexion
        </div>
        <div className="bg-blue-300 p-4 rounded-xl size-15 flex-none">
          Inscription
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center my-6">CinéTech</h1>
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
          <MovieList movies={moviesList} />
        </Section>
        <Section title={'Films coup de coeur'}>
          <MovieList
            movies={moviesList}
            filter={(movie) => movie.rating >= 8}
          />
        </Section>
        <Section title={'Films de super hero'}>
          <MovieList
            movies={moviesList}
            filter={(movie) => movie.genre === 'super-hero'}
          />
        </Section>
      </main>

      <Counter></Counter>
      <footer className="grid grid-cols-1 sm:grid-cols-4 gap-6 bg-gray-200">
        <div></div>
        <div>
          <h4>contact</h4>
          <h4>mentions legales</h4>
          <h4>condition de vente</h4>
        </div>
        <div>
          <h4>contact@thibaultroyer.fr</h4>
          <h4>site détenu par une entreprise sérieuse</h4>
          <h4>merci de faire un don</h4>
        </div>
      </footer>
    </>
  );
}
