export default function Header({ hobbits, setHobbits, hps }) {
  function incrementHobbits() {
    setHobbits(hobbits + 1);
  }

  return (
    <div>
      <p>Current Hobbits: {hobbits}</p>
      <button onClick={incrementHobbits}>Recruit A Hobbit</button>
      <p>Hobbits Per Second: {hps}</p>
    </div>
  );
}
