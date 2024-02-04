import { useRef, useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [text, setText] = useState([]);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(inputRef.current.value);
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h4>tired of boring lorem ipsum</h4>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max={data.length}
          ref={inputRef}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p key={nanoid()} style={{ animationDelay: `${index * 0.5}s` }}>
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
};
export default App;
