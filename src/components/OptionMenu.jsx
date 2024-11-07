export default function OptionMenu(setHobbits, setHps) {
  return (
    <div>
      <button>Options</button>
      <div>
        <a href="#" id="toggle-music">
          Disable Sounds
        </a>
        <a href="#" id="theme-music-button">
          Restart Theme
        </a>
        <a href="#" id="reset-button">
          Reset Game
        </a>
        <a href="#" id="cheat-button">
          Cheat!
        </a>
      </div>
    </div>
  );
}
