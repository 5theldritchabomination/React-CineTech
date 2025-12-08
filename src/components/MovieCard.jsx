export default function MovieCard({ movie }) {
  return (
    <li
      key={movie.id}
      className="bg-gray-100 rounded-xl p-4 shadow hover:animate-pulse"
    >
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
  );
}
