import React, { useState } from 'react';
const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
export default Counter;