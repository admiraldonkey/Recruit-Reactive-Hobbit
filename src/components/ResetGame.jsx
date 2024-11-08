export default function ResetGame({
  setHobbits,
  setHps,
  reset,
  setReset,
  setUi,
  themeTune,
  setNewGame,
}) {
  // Confirmation popup asking if user is sure about a reset
  function confirmReset() {
    if (
      confirm(
        "This will reset all current game data and any data in local storage. Are you sure you wish to reset?"
      )
    ) {
      resetGame();
    }
    // Reset states to defaults, clear local storage, stop & rewind theme music
    function resetGame() {
      localStorage.clear();
      setReset(!reset);
      setHobbits(0);
      setHps(0);
      setUi({
        header: "#393227dd",
        image: 0,
        footer: "#05080bdd",
      });
      themeTune.pause();
      themeTune.currentTime = 0;
      setNewGame(true);
    }
  }

  return (
    <a href="#" id="reset-button" onClick={confirmReset}>
      Reset Game
    </a>
  );
}
