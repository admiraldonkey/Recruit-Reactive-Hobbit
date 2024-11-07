export default function ResetGame({ setHobbits, setHps, reset, setReset }) {
  function confirmReset() {
    if (
      confirm(
        "This will reset all current game data and any data in local storage. Are you sure you wish to reset?"
      )
    ) {
      resetGame();
    }

    function resetGame() {
      localStorage.clear();
      setReset(!reset);
      setHobbits(0);
      setHps(0);
    }
  }

  return (
    <a href="#" id="reset-button" onClick={confirmReset}>
      Reset Game
    </a>
  );
}
