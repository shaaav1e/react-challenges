import React from "react";
import { nanoid } from "nanoid";

export default function App() {
  // Capitalized App function name

  const [flashCard, setFlashCard] = React.useState({
    question: "What is React?",
    choices: ["A JavaScript framework", "A JavaScript library"],
    answer: "A JavaScript library.",
    explanation: `It's absolutely crucial that if you ever hear anyone have the
              audacity to call it a framework, you must correct them.`,
  });

  // Add state for tracking card flip
  const [isFlipped, setIsFlipped] = React.useState(false);

  // Add click handler to toggle flip state
  const handleCardClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div>
      <header>
        <img src="./images/react.svg" alt="React logo" />
        <h1> React Study Buddy </h1>
      </header>

      <div
        className={`flash-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="flash-card-inner">
          <div className="flash-card-front">
            <p className="question">{flashCard.question}</p>
            <ol type="a">
              {flashCard.choices.map((choice) => (
                <li key={nanoid()}>{choice}</li>
              ))}
            </ol>
          </div>
          <div className="flash-card-back">
            <p className="answer">{flashCard.answer}</p>
            <p>{flashCard.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
