import { useState } from 'react';

export default function Counter({ startPoint, howMany }) {
  const [count, setCount] = useState(startPoint);
  const restart = () => {
    setCount(startPoint);
  };
  const increment = () => {
    setCount(count + howMany);
  };
  const decrement = () => {
    setCount(count - howMany);
  };

  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow">
      <p>Compteur : {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded"
        onClick={increment}
      >
        +{howMany}
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 rounded"
        onClick={decrement}
      >
        -{howMany}
      </button>
      <button
        className="bg-yellow-500 hover:bg-green-700 text-white font-bold px-2 py-1 rounded"
        onClick={restart}
      >
        Restart
      </button>
    </div>
  );
}
