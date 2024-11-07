export default function Header({ hobbits, setHobbits, hps }) {
  function incrementHobbits() {
    setHobbits(hobbits + 1);
  }

  return (
    <header className="game-data">
      <p>Current Hobbits: {hobbits}</p>
      <button className="hobbit-btn" onClick={incrementHobbits}>
        Recruit A Hobbit
      </button>
      <p>Hobbits Per Second: {hps}</p>
    </header>
  );
}
