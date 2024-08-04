import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <h2>Count = {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default Test;
