"use client";

import { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris",
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      answer: "Harper Lee",
    },
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold">Your Score: {score}</h2>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="flex flex-col">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 m-2 border rounded ${
                  selectedOption === option
                    ? option === questions[currentQuestionIndex].answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
