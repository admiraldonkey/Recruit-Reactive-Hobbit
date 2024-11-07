export default function UpgradeButton({
  upgradeName,
  buyUpgrade,
  costNext,
  hobbits,
}) {
  return (
    <button onClick={buyUpgrade} disabled={hobbits >= costNext ? false : true}>
      {upgradeName}
    </button>
  );
}
