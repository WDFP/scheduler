import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory((prev) => [...(replace ? prev.slice(0, -1) : prev), newMode]);
  };

  const back = () => {
    if (history.length > 1) {
      setHistory((prev) => [...prev].slice(0, -1));
      setMode(history[history.length - 2]);
    }
  };

  return { mode, transition, back };
}
