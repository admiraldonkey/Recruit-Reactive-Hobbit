export default function SaveGame({ hobbits, hps, upgrades, ui }) {
  // Saves user progress to local storage
  function saveData() {
    localStorage.setItem("hobbits", hobbits);
    localStorage.setItem("hps", hps);
    localStorage.setItem("ui", JSON.stringify(ui));
    saveUpgrades();
    alert("Save completed!");
  }

  function saveUpgrades() {
    localStorage.setItem("upgrades", JSON.stringify(upgrades));
  }

  return (
    <a href="#" id="save-button" onClick={saveData}>
      Save Game
    </a>
  );
}
