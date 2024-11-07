import ResetGame from "./ResetGame";
import SaveGame from "./SaveGame";

export default function OptionMenu({
  hobbits,
  setHobbits,
  hps,
  setHps,
  upgrades,
  reset,
  setReset,
}) {
  return (
    <div className="options">
      <button className="options-button">Options</button>
      <div className="options-content">
        <SaveGame hobbits={hobbits} hps={hps} upgrades={upgrades} />
        <br />
        <a href="#" id="toggle-music">
          Disable Sounds
        </a>
        <br />
        <a href="#" id="theme-music-button">
          Restart Theme
        </a>
        <br />
        <ResetGame
          setHobbits={setHobbits}
          setHps={setHps}
          reset={reset}
          setReset={setReset}
        />
        <br />
        <a href="#" id="cheat-button">
          Cheat!
        </a>
      </div>
    </div>
  );
}
