import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // count clicks
  const [timer, setTimer] = useState(0); // elapsed time
  const [isTimerRunning, setIsTimerRunning] = useState(false); // start/stop timer
  const [clicksPerSecond, setClicksPerSecond] = useState(0); // number of clicks per second

  const [startTime, setStartTime] = useState(0); // start time

  // effect to start and stop the timer
  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 100); // time in steps of .1 seconds
      }, 100); // Elke 100ms
    } else {
      clearInterval(interval); // when the timer stops, stop the interval
    }

    return () => clearInterval(interval); // clean up
  }, [isTimerRunning]);

  // click to start timer
  const handleClick = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true); // start timer on first click
      setStartTime(Date.now()); // set start time
    }
    setCount(count + 1); // increment count
  };

  // reset function
  const handleReset = () => {
    setIsTimerRunning(false); // stop timer
    const timeElapsedInSeconds = (timer / 1000).toFixed(2); // change ms to sec
    const cps = (count / timeElapsedInSeconds).toFixed(2); // clicks a second
    setClicksPerSecond(cps); // set clicks per second

    // reset values
    setCount(0);
    setTimer(0);
    setStartTime(0);
  };

  return (
    <div
      className={`counter ${count % 2 === 0 ? "counter_even" : "counter_odd"}`}
    >
      <p>Je hebt {count} keer geklikt.</p>
      <button onClick={handleClick} className="counter_button">
        Start
      </button>
      {isTimerRunning && (
        <button onClick={handleReset} className="counter_button_stop">
          Stop
        </button>
      )}
      {!isTimerRunning && (
        <button onClick={handleReset} className="counter_button_reset">
          Reset
        </button>
      )}

      <p>Time elapsed: {timer / 1000} seconds</p>

      {/* clicks per second */}
      {clicksPerSecond > 0 && (
        <p>Je klikte {clicksPerSecond} keer per seconde.</p>
      )}
    </div>
  );
}
