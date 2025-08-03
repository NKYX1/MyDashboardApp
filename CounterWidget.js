import React, { useState } from 'react';

function CounterWidget() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleReset = () => setCount(0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Dynamic Counter</h3>
      <p className="text-2xl mb-4">{count}</p>
      <div className="space-x-2">
        <button onClick={handleIncrement} className="px-4 py-2 bg-blue-500 text-white rounded">Increase</button>
        <button onClick={handleDecrement} className="px-4 py-2 bg-yellow-500 text-white rounded">Decrease</button>
        <button onClick={handleReset} className="px-4 py-2 bg-red-500 text-white rounded">Reset</button>
      </div>
    </div>
  );
}

export default CounterWidget;
