import { useState, useEffect, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef<number>(0);
  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(
        () => setTime((prevTime) => prevTime + 1),
        10
      );
    }
    return () => clearInterval(intervalId.current);
  }, [isRunning]);

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const formatTimeUnit = (unit: number) => {
    return unit.toString().padStart(2, "0");
  };
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
        {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={toggleRunning}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
