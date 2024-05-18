import { useState } from 'react';

function App() {
  const [hourlyRate, setHourlyRate] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [totalRate, setTotalRate] = useState(null);

  const calculateTotalRate = () => {
    const totalHours = hours + minutes / 60;
    const total = hourlyRate * totalHours;
    setTotalRate(total.toFixed(2));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Rate Calculator</h1>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Hourly Rate (RM):</label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Hours:</label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(parseFloat(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Minutes:</label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseFloat(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={calculateTotalRate}
          className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Calculate
        </button>
        {totalRate !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">My Total Rate: <span className="underline decoration-sky-500">RM {totalRate}</span></h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
