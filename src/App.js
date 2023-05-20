import "./styles.css";
import { useRef, useState } from "react";
export default function App() {
  const random = Math.random();
  const refVar = useRef(random);
  let regVar = random;
  const [set, setUpdate] = useState(0);
  return (
    <div className="App">
      <div>Regvar = {regVar}</div>
      <div>Refvar = {refVar.current}</div>
      <div>
        <button onClick={() => setUpdate((prev) => !prev)}>Re-render</button>
      </div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
