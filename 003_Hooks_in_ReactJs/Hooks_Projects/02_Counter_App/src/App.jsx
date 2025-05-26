import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>count is {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count < 20 ? count + 1 : count)}>
          Click to add Count {count}
        </button>

        <button onClick={() => setCount((count) => count > 0 ? count - 1 : count)}>
          Click to less Count {count}
        </button>
      </div>
    </>
  );
}

export default App;
