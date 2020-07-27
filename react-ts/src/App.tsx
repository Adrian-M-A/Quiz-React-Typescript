import React, { useState } from 'react';
import './App.css';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import {QuestionState, Difficulty } from './API'

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;
const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () =>{

    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) =>{

  }

  const nextQuestion = () =>{

  }

  return (
    <div className="App">
      <h1>REACT-TS Quiz</h1>
      {gameOver || setUserAnswers.length === TOTAL_QUESTIONS
        ?
        <button className="start" onClick={startTrivia}>
        Start
        </button>
        :
        null
      }
      {!gameOver ? <p className="score">Score:</p> : null}
      {loading ? <p> Loading Questions...</p> : null}
      {/* <QuestionCard
        questionNr={number +1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
