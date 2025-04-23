export default function Square({ value }) {
  function handleClick() {
    console.log("clicked", value);
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
