export default function SaveGame({ hobbits, hps, upgrades }) {
  function saveData() {
    localStorage.setItem("hobbits", hobbits);
    localStorage.setItem("hps", hps);
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
