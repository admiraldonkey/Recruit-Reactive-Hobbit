export default function UpgradeButton({
  newUpgradeName,
  buyUpgrade,
  upgradeCost,
  hobbits,
}) {
  return (
    <button
      onClick={buyUpgrade}
      disabled={hobbits >= upgradeCost ? false : true}
    >
      {newUpgradeName}
    </button>
  );
}
