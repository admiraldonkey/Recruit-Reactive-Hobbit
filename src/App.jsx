import { useState, useEffect } from "react";
import Header from "./components/Header";
import Upgrades from "./components/Upgrades";

export default function App() {
  const [hobbits, setHobbits] = useState(
    parseInt(localStorage.getItem("hobbits")) || 1000
  );
  const [hps, setHps] = useState(parseInt(localStorage.getItem("hps")) || 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHobbits((current) => current + hps);
    }, 1000);

    return () => clearInterval(interval);
  }, [hps]);

  return (
    <div>
      <Header hobbits={hobbits} setHobbits={setHobbits} hps={hps} />
      <Upgrades
        hobbits={hobbits}
        setHobbits={setHobbits}
        hps={hps}
        setHps={setHps}
      />
    </div>
  );
}
