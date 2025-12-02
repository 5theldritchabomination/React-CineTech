import MovieList from './components/MovieList.jsx';
import moviesList from '/var/www/html/cinetech-react/src/data/moviesList.js';

export default function App() {
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
      <MovieList movies={moviesList} />
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
