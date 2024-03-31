import { useCallback, useEffect, useRef } from "react";
import "./Stopwatch.css";
import { useSelector, useDispatch } from "react-redux";
import { StopWatchSlice } from "../../stopwatchSlice";

const Stopwatch = () => {
  const state = useSelector((s: StopWatchSlice) => s.stopwatch);
  const dispatch = useDispatch();
  const intervalId = useRef<number>(0);

  const action = useCallback(
    (fn: string) => {
      return () => dispatch({ type: "stopwatch/" + fn });
    },
    [dispatch]
  );

  useEffect(() => {
    if (state.running) {
      intervalId.current = setInterval(action("incrementTime"), 10);
    }
    return () => clearInterval(intervalId.current);
  }, [state.running, action]);

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  const formatTimeUnit = (unit: number) => {
    return unit.toString().padStart(2, "0");
  };

  const hours = Math.floor(state.time / 360000);
  const minutes = Math.floor((state.time % 360000) / 6000);
  const seconds = Math.floor((state.time % 6000) / 100);
  const milliseconds = state.time % 100;

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
        {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={action("toggleRunning")}>
          {state.running ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={action("reset")}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
