import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of India?",
      answerOptions: [
        { answerText: "Delhi", isCorrect: true },
        { answerText: "Raipur", isCorrect: false },
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Lucknow", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Maharashtra?",
      answerOptions: [
        { answerText: "Bangalore", isCorrect: false },
        { answerText: "Mumbai", isCorrect: true },
        { answerText: "Uttar Pradesh", isCorrect: false },
        { answerText: "Ahamdabad", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Gujrat?",
      answerOptions: [
        { answerText: "Ahamdabad", isCorrect: true },
        { answerText: "Surat", isCorrect: false },
        { answerText: "Jaipur", isCorrect: false },
        { answerText: "Lucknow", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Uttar Pradeh",
      answerOptions: [
        { answerText: "Banaras", isCorrect: false },
        { answerText: "Ghajiyabad", isCorrect: false },
        { answerText: "Unnao", isCorrect: false },
        { answerText: "Lucknow", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of West Bangal",
      answerOptions: [
        { answerText: "Banaras", isCorrect: false },
        { answerText: "Sikkim", isCorrect: false },
        { answerText: "Hawda", isCorrect: false },
        { answerText: "Kolkata", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
  shuffleArray(questions);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (showScore) {
      shuffleArray(questions);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <h1 className="quiz">Quiz</h1>
      <h3 className="quiz">Current Score: {score}</h3>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            <h3 className="scored">
              You scored {score} out of {questions.length}
            </h3>
            <button
              className="playagain"
              onClick={() => {
                setShowScore(!showScore);

                setCurrentQuestion(0);
                setScore(0);
              }}
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="main">
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      key={index}
                      className={`mb`}
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
