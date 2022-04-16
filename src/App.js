import "./styles.css";
import data from "./data";
import { useState, useTransition } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (event) => {
    setInputVal(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };

  const filteredUserNames = data.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div className="App">
      <label>Type something here : </label>
      <input type="text" value={inputVal} onChange={handleChange} />
      {isPending && <h6>Be patient! updaing lists...</h6>}
      {filteredUserNames.map((userData) => {
        return (
          <span className="username" key={userData.id}>
            {userData.first_name} {userData.last_name}
          </span>
        );
      })}
    </div>
  );
}
