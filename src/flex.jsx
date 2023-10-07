import React, { useState } from "react";
import "./App.css";

const CssQuizGame = () => {
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "What CSS property is used to change the text color of an element?",
      answerOptions: [
        { answerText: "color", isCorrect: true },
        { answerText: "background-color", isCorrect: false },
        { answerText: "font-size", isCorrect: false },
        { answerText: "border", isCorrect: false },
      ],
    },
    {
      questionText: "Which CSS property is used to add spacing between HTML elements?",
      answerOptions: [
        { answerText: "margin", isCorrect: true },
        { answerText: "padding", isCorrect: false },
        { answerText: "border", isCorrect: false },
        { answerText: "width", isCorrect: false },
      ],
    },
    // Add more questions here
  ];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    // Move to the next question (you can implement this logic)
  };

  return (
    <div className="quiz-container">
      <h1>CSS Quiz</h1>
      <div className="question-container">
        <div className="question-text">
          {questions[0].questionText} {/* Display the current question */}
        </div>
        <div className="answer-options">
          {questions[0].answerOptions.map((answerOption, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answerOption.isCorrect)}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default CssQuizGame;
