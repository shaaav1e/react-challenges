import { useState } from "react";
import GameButton from "./components/gameButton";
import StudyBuddy from "./StudyBuddy";
function App() {
  return (
    <>
      <h1 className="text-center mt-5 font-bold text-2xl ">React Challenges</h1>
      <GameButton />
      <StudyBuddy />
    </>
  );
}

export default App;
