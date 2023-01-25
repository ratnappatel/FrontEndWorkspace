import { useState, useEffect, useRef } from "react";

export default function UseRefComp() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(100);

  useEffect(() => {
    count.current = count.current + 10;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <h2>Current Input of TextField : {inputValue}</h2>
    </>
  );
}