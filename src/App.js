import "./styles.css";
import data from "./data";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  // const [isPending] = useTransition();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredUserNames = data.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div className="App">
      <label>Type something here : </label>
      <input type="text" onChange={handleChange} />
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
