import React from 'react';
import './App.css';
// Components
import QuestionCard from './components/QuestionCard';

const App = () => {

  const startTrivia = async () =>{

  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) =>{

  }

  const nextQuestion = () =>{

  }

  return (
    <div className="App">
     <h1>REACT-TS Quiz</h1>
     <button className="start" onClick={startTrivia}>
       Start
     </button>
     <p className="score">Score:</p>
     <p> Loading Questions...</p>
    </div>
  );
}

export default App;
