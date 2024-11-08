export default function Header({
  hobbits,
  setHobbits,
  hps,
  ui,
  setUi,
  newGame,
  setNewGame,
  themeTune,
}) {
  function incrementHobbits() {
    // If first action, play theme tune and update ui styling
    if (newGame) {
      themeTune.play();
      if (ui.image < 3) {
        setUi({ ...ui, header: "#829184dd", image: 1, footer: "#727927dd" });
      }
      setNewGame(false);
    }
    setHobbits(hobbits + 1);
  }

  return (
    <header>
      <div className="game-data" style={{ backgroundColor: `${ui.header}` }}>
        <div className="game-stats">
          <p className="hobbit-display">Current Hobbits: {hobbits}</p>
          <p className="hps-display">Hobbits Per Second: {hps}</p>
        </div>
        <button className="hobbit-btn" onClick={incrementHobbits}>
          RECRUIT A HOBBIT
        </button>
      </div>
    </header>
  );
}
