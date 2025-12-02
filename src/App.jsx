import moviesList from './data/moviesList.js';
export default function App() {
  const moviesListf = moviesList();
  console.log(moviesListf);
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
        <h2 className="text-3xl font-bold text-red-800">Films du moment</h2>
        <ul className="justify-content-center">
          {moviesListf
            .filter((movie) => movie.id == 5)
            .map((movie) => (
              <li
                key={movie.id}
                className="bg-gray-100 rounded-l p-4 shadow justify-items-center justify-self-center"
              >
                <h3 className="text-3xl font-semi-bold">{movie.title}</h3>
                <p className="text-sm text-gray-600">
                  {movie.year} — {movie.director}
                </p>
                <p>{movie.synopsis}</p>
                <p className="mt-2 text-blue-300">Note : {movie.rating}</p>
                <img
                  src={movie.poster}
                  className="w-all h-25 object-cover rounded"
                ></img>
              </li>
            ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4">Films à l'affiche</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesListf.map((movie) => (
            <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
              <h3 className="text-xl font-semi-bold">{movie.title}</h3>
              <p className="text-sm text-gray-600">
                {movie.year} — {movie.director}
              </p>
              <p className="mt-2">Note : {movie.rating}</p>
              <img
                src={movie.poster}
                className="w-full h-64 object-cover rounded"
              ></img>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4">Films coups de coeur</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesListf
            .filter((movie) => movie.rating >= 8)
            .map((movie) => (
              <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
                <h3>{movie.title}</h3>
                <p>
                  {movie.year} — {movie.director}
                </p>
                <p>Note : {movie.rating}</p>
                <img
                  src={movie.poster}
                  className="w-full h-64 object-cover rounded"
                ></img>
              </li>
            ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4">Films de super hero</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {moviesListf
            .filter((movie) => movie.genre.includes('super-hero'))
            .map((movie) => (
              <li key={movie.id} className="bg-gray-100 rounded-xl p-4 shadow">
                <h3>{movie.title}</h3>
                <p>
                  {movie.year} — {movie.director}
                </p>
                <p>Note : {movie.rating}</p>
                <img
                  src={movie.poster}
                  className="w-full h-64 object-cover rounded"
                ></img>
              </li>
            ))}
        </ul>
      </main>
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
