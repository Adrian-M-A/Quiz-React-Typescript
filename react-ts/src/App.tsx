import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import {QuestionState, Difficulty } from './API'
// Styles
import './App.css';

export type AnswerObject = {
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
    if(!gameOver){
      // Take the answer compare with the correct SVGZoomAndPan, if it's add 1 to the score
      const answer = event.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1)
      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () =>{
    const nextQuestion = number +1;
    if (nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    } else{
      setNumber(nextQuestion)
    }

  }

  return (
      <div className="App">
        <h1>REACT-TS Quiz</h1>
        {gameOver || setUserAnswers.length === TOTAL_QUESTIONS ?
          <button className="start" onClick={startTrivia}>
          Start
          </button>
          :
          null
        }
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <p> Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
          questionNr={number +1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callback={checkAnswer}
          /> 
        )} 
        {!gameOver && 
        !loading && 
        userAnswer.length === number +1 &&
        number !== TOTAL_QUESTIONS -1 ? (
          <button className="next" onClick={nextQuestion}>
          Next Question
          </button>
        ): null}
        
      </div>
  );
}

export default App;
