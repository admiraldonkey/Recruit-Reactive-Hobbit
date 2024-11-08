import ResetGame from "./ResetGame";
import SaveGame from "./SaveGame";
import Confuse from "../assets/sounds/Confuse.mp3";
const confuseSound = new Audio(Confuse);

export default function OptionMenu({
  hobbits,
  setHobbits,
  hps,
  setHps,
  upgrades,
  reset,
  setReset,
  music,
  setMusic,
  ui,
  setUi,
  themeTune,
  setNewGame,
}) {
  // Play theme tune if music is turned on
  function playTheme() {
    if (music) {
      themeTune.pause();
      themeTune.currentTime = 0;
      themeTune.play();
    }
  }
  // Enable/disable music
  function switchMusic() {
    setMusic(!music);
    themeTune.pause();
  }
  // Be a terrible person
  function cheat() {
    setHobbits((hobbits) => hobbits + 200000);
    if (ui.image != 3) {
      setUi({ ...ui, header: "#bc9c11dd", image: 3, footer: "#1c320fdd" });
    }
    if (music) {
      confuseSound.play();
    }
  }

  return (
    <div className="options">
      <button className="options-button">Options</button>
      <div className="options-content">
        <SaveGame hobbits={hobbits} hps={hps} upgrades={upgrades} ui={ui} />
        <a href="#" onClick={switchMusic}>
          {music ? "Disable music" : "Enable music"}
        </a>
        <a href="#" onClick={playTheme}>
          Restart Theme
        </a>
        <ResetGame
          setHobbits={setHobbits}
          setHps={setHps}
          reset={reset}
          setReset={setReset}
          setUi={setUi}
          themeTune={themeTune}
          setNewGame={setNewGame}
        />
        <a href="#" onClick={cheat}>
          Cheat!
        </a>
      </div>
    </div>
  );
}
