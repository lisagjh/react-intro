import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Je hebt {count} keer geklikt.</p>
      <button onClick={() => setCount(count + 1)} className="counter_button">Klik mij</button>
      <button onClick={() => setCount(0)} className="counter_button_reset" >Reset</button>
    </div>
  );
}
