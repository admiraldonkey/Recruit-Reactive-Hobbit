import { useState, useEffect } from "react";
import UpgradeButton from "./UpgradeButton";
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

export default function Upgrades({ hobbits, setHobbits, hps, setHps }) {
  const [upgrades, setUpgrades] = useState([]);

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
    getUpgrades();
  }, []);

  // Handles logic when an upgrade is purchased
  function buyUpgrade(e) {
    // Fetch name of upgrade purchased
    const upgradeName = e.target.textContent;
    // Find upgrade in upgrades array and update values
    const updateUpgrade = (upgradeName) => {
      setUpgrades(
        upgrades.map(function (upgrade) {
          if (upgrade.name === upgradeName) {
            setHps((hps) => hps + upgrade.increase);
            setHobbits((hobbits) => hobbits - upgrade.costNext);
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
  }

  return (
    <div>
      {upgrades.map(function (upgrade) {
        return (
          <div key={upgrade.id}>
            <UpgradeButton
              buyUpgrade={buyUpgrade}
              upgradeName={upgrade.name}
              hobbits={hobbits}
              costNext={upgrade.costNext}
            />
            <p>Cost: {upgrade.costNext}</p>
            <p>Increase: {upgrade.increase}</p>
            <p>Owned: {upgrade.owned}</p>
          </div>
        );
      })}
    </div>
  );
}
