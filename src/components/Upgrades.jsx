import { useState, useEffect } from "react";
import UpgradeButton from "./UpgradeButton";
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

  useEffect(() => {
    async function getUpgrades() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setUpgrades(data);
    }
    getUpgrades();
  }, []);

  function buyUpgrade(e) {
    const costElem = e.target.nextSibling;
    const increaseElem = costElem.nextSibling;
    const ownedElem = increaseElem.nextSibling;
    const cost = parseInt(costElem.textContent);
    const increase = parseInt(increaseElem.textContent);
    const owned = parseInt(ownedElem.textContent);

    setHps(hps + increase);
    setHobbits(hobbits - cost);
  }

  return (
    <div>
      {upgrades.map(function (upgrade) {
        return (
          <div key={upgrade.id}>
            <UpgradeButton
              buyUpgrade={buyUpgrade}
              newUpgradeName={newUpgradeNames[upgrade.id - 1]}
              hobbits={hobbits}
              upgradeCost={upgrade.cost}
            />
            <p>Cost: {upgrade.cost}</p>
            <p>Price: {upgrade.increase}</p>
            <p>Owned: </p>
          </div>
        );
      })}
    </div>
  );
}
