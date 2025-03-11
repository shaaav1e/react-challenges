/*
        2. When the user clicks the button, the gameRunning state's boolean value should be set to 
           the opposite value of what it currently is (from true to false or vice-versa).
            
        3. If gameRunning is true, the button should display the word "Pause". If gameRunning is 
           false, the button should display the word "Play". In other words:
          
             ┌─────────────┐     ------------>     ┌─────────────┐            
             │     Play    │         click         │    Pause    │
            
        1. The button should receive a class name of "video-game-button"
             └─────────────┘     <------------     └─────────────┘
           gameRunning = false                    gameRunning = true 
             (game is paused)                      (game is playing)
             
        4. If you complete these tasks correctly, the button should have some nice visual effects 
           when you click it, and the workshop background should be automatically replaced by a 
           light blue background.
*/
import React, { useState } from "react";

const GameButton = () => {
  const [gameRunning, setGameRunning] = useState(false);

  return <div></div>;
};

export default GameButton;
