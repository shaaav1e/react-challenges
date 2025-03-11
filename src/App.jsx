import { useState } from "react";
import GameButton from "./components/gameButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-3xl font-bold  bg-slate-700 bg underline">
        Hello world!
      </h1>
      <GameButton />
    </>
  );
}

export default App;
