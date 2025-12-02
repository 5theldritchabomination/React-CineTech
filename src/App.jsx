import moviesList from './data/moviesList.js';
export default function App() {
  const moviesListf = moviesList();
  console.log(moviesListf);
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6">CinéTech</h1>
      <main className="max-w-7xl mx-auto mt-6">
        <h2 className="text-3xl font-bold text-red-800">Films du moment</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {moviesListf
            .filter((movie) => movie.id == 5)
            .map((movie) => (
              <li
                key={movie.id}
                className="bg-gray-100 rounded-xl p-4 shadow justify-items-center justify-self-center"
              >
                <h3 className="text-3xl font-semi-bold">{movie.title}</h3>
                <p className="text-sm text-gray-600">
                  {movie.year} — {movie.director}
                </p>
                <p>{movie.synopsis}</p>
                <p className="mt-2 text-blue-300">Note : {movie.rating}</p>
                <img
                  src={movie.poster}
                  className="w-30 h-25 object-cover rounded"
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
    </>
  );
}
