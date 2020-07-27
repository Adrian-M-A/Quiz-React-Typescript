import React, { useState } from 'react';
import './App.css';
// Components
import QuestionCard from './components/QuestionCard';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () =>{

  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) =>{

  }

  const nextQuestion = () =>{

  }

  const TOTAL_QUESTIONS = 10;

  return (
    <div className="App">
      <h1>REACT-TS Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p> Loading Questions...</p>
      <QuestionCard
        questionNr={number +1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
