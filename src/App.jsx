import { useState, useEffect } from "react";
import Header from "./components/Header";
import ImageTile from "./components/ImageTile.";
import Upgrades from "./components/Upgrades";
import Theme from "./assets/sounds/Concerning Hobbits.mp3";
const themeTune = new Audio(Theme);

export default function App() {
  const [hobbits, setHobbits] = useState(
    parseInt(localStorage.getItem("hobbits")) || 0
  );
  const [hps, setHps] = useState(parseInt(localStorage.getItem("hps")) || 0);
  // For updating ui styling as user progresses through the game
  const [ui, setUi] = useState(
    JSON.parse(localStorage.getItem("ui")) || {
      header: "#393227dd",
      image: 0,
      footer: "#05080bdd",
    }
  );
  // For keeping track of whether game has been reset or if first time playing
  const [newGame, setNewGame] = useState(true);

  // Create timer for updating hps every 1 second, dependent on hps
  useEffect(() => {
    const interval = setInterval(() => {
      setHobbits((current) => current + hps);
    }, 1000);

    return () => clearInterval(interval);
  }, [hps]);

  return (
    <div className="page-content">
      <Header
        hobbits={hobbits}
        setHobbits={setHobbits}
        hps={hps}
        ui={ui}
        setUi={setUi}
        newGame={newGame}
        setNewGame={setNewGame}
        themeTune={themeTune}
      />
      <ImageTile ui={ui} setUi={setUi} />
      <Upgrades
        hobbits={hobbits}
        setHobbits={setHobbits}
        hps={hps}
        setHps={setHps}
        ui={ui}
        setUi={setUi}
        newGame={newGame}
        setNewGame={setNewGame}
        themeTune={themeTune}
      />
    </div>
  );
}
