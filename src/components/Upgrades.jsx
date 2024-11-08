import { useState, useEffect } from "react";
import UpgradeButton from "./UpgradeButton";
// import Reset from "./Reset";
import OptionMenu from "./OptionMenu";
// Import array of sounds from sound folder
const importSounds = import.meta.glob(`../assets/sounds/*`);

// Names array to swap out fetched upgrade names
const newUpgradeNames = [
  "Hobbit Hole",
  "Peace and Quiet",
  "Good Tilled Earth",
  "Pint of Ale",
  "Old Toby",
  "Bakery",
  "Gandalf's Fireworks",
  "Brewery",
  "Inn",
  "111th Birthday Party",
];

export default function Upgrades({
  hobbits,
  setHobbits,
  hps,
  setHps,
  newGame,
  setNewGame,
  ui,
  setUi,
  themeTune,
}) {
  const [upgrades, setUpgrades] = useState(
    JSON.parse(localStorage.getItem("upgrades")) || []
  );
  // State used to reset upgrades (trigger useEffect again) when reset button pressed
  const [reset, setReset] = useState(false);
  const [music, setMusic] = useState(true);
  const [playing, setPlaying] = useState(false);

  // Retrieve upgrades from API
  useEffect(() => {
    async function getUpgrades() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();

      // Swap out upgrade names with those from newUpgradeNames array
      // Also initialise a costNext param with default value set to base cost, and an owned param set to 0
      const newData = data.map((datum) => ({
        ...datum,
        name: newUpgradeNames[datum.id - 1],
        costNext: datum.cost,
        owned: 0,
      }));
      // update upgrades with amended data state via setUpgrades
      setUpgrades(newData);
    }
    // Retrieve upgrades from API if none exist in local storage (1st render, game not saved or game reset)
    if (localStorage.getItem("upgrades") == null) {
      getUpgrades();
    }
  }, [reset]);

  // Handles logic when an upgrade is purchased
  function buyUpgrade(e) {
    // If first action, play theme tune and update ui styling
    if (newGame) {
      themeTune.play();
      if (ui.image < 3) {
        setUi({ ...ui, header: "#829184dd", image: 1, footer: "#727927dd" });
      }
      setNewGame(false);
    }
    // Fetch name of upgrade purchased
    const upgradeName = e.target.textContent;
    let upgradeId = 0;

    // Find upgrade in upgrades array and update values
    const updateUpgrade = (upgradeName) => {
      setUpgrades(
        upgrades.map(function (upgrade) {
          if (upgrade.name === upgradeName) {
            setHps((hps) => hps + upgrade.increase);
            setHobbits((hobbits) => hobbits - upgrade.costNext);
            upgradeId = upgrade.id;
            const update = {
              ...upgrade,
              costNext: upgrade.costNext + upgrade.cost,
              owned: upgrade.owned + 1,
            };
            return update;
          } else {
            return upgrade;
          }
        })
      );
    };
    updateUpgrade(upgradeName);
    // Update ui styling dependent on which upgrade was purchased (if styling not already updated)
    if (upgradeId >= 6) {
      if (ui.image < 3) {
        setUi({ ...ui, header: "#bc9c11dd", image: 3, footer: "#1c320fdd" });
      }
    } else if (upgradeId >= 2) {
      if (ui.image < 2) {
        setUi({ ...ui, header: "#828f98dd", image: 2, footer: "#46570cdd" });
      }
    }

    // If sounds are enabled, loop through available sounds to play the correct sound effect
    if (music && !playing) {
      for (const path in importSounds) {
        importSounds[path]().then((map) => {
          const initStr = path.split("/");
          if (initStr[3].split(".")[0] == upgradeName) {
            const playSound = new Audio(map.default);
            playSound.play();
            // Prevents sound effects from playing over one another (sound effect over theme tune is fine)
            setPlaying(true);
            playSound.onended = function () {
              setPlaying(false);
            };
          }
        });
      }
    }
  }

  return (
    <div className="game-container" style={{ backgroundColor: `${ui.footer}` }}>
      <div className="game-bar">
        <h1>West Farthing Resettlement Initiative</h1>
        <h2>
          Hobbit Populations Have Dwindled In The Wake Of The Scouring Of The
          Shire. Will You Help Them Repopulate?{" "}
        </h2>
        <OptionMenu
          hobbits={hobbits}
          setHobbits={setHobbits}
          hps={hps}
          setHps={setHps}
          upgrades={upgrades}
          reset={reset}
          setReset={setReset}
          music={music}
          setMusic={setMusic}
          ui={ui}
          setUi={setUi}
          themeTune={themeTune}
          setNewGame={setNewGame}
        />
        <h3>Purchase Upgrades And Incentives To Attract New Hobbits!</h3>
      </div>
      <div className="upgrades">
        <div className="upgrade-display">
          <p className="upgrade-headers">
            <span>Upgrade</span>
            <span>Cost</span>
            <span>Increase</span>
            <span>Owned</span>
          </p>
          {upgrades.map(function (upgrade) {
            return (
              <p key={upgrade.id}>
                <UpgradeButton
                  buyUpgrade={buyUpgrade}
                  upgradeName={upgrade.name}
                  hobbits={hobbits}
                  costNext={upgrade.costNext}
                />
                <span>{upgrade.costNext}</span>
                <span>{upgrade.increase}</span>
                <span>{upgrade.owned}</span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
