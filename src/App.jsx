import { useState, useEffect } from "react";
import Header from "./components/Header";
import ImageTile from "./components/ImageTile.";
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
    <div className="page-content">
      <Header hobbits={hobbits} setHobbits={setHobbits} hps={hps} />
      <ImageTile />
      <Upgrades
        hobbits={hobbits}
        setHobbits={setHobbits}
        hps={hps}
        setHps={setHps}
      />
    </div>
  );
}
