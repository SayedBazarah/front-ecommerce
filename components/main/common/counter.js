import Style from "./counter.module.css";

function Counter({ count, setCount }) {
  return (
    <div className={Style.count}>
      <button
        onClick={() => {
          setCount(--count);
        }}
      >
        -
      </button>
      <input
        min={1}
        step={1}
        type="number"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
