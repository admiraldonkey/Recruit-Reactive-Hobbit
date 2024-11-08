export default function UpgradeButton({
  upgradeName,
  buyUpgrade,
  costNext,
  hobbits,
}) {
  // Button for each upgrade, disables if user unable to afford
  return (
    <button onClick={buyUpgrade} disabled={hobbits >= costNext ? false : true}>
      {upgradeName}
    </button>
  );
}
