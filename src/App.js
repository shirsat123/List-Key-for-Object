import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState([
    { id: 1, name: "Sonali" },
    { id: 2, name: "Sarika" },
    { id: 3, name: "Sidhhi" },
    { id: 4, name: "Komal" }
  ]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>List Component</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={(e) => {
          setState([
            ...state,
            ...[{ id: Math.floor(Math.random() * 100), name: input }]
          ]);
          setInput("");
        }}
      >
        Add user
      </button>
    </div>
  );
}
