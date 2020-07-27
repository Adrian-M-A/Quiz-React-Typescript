import React from 'react';
// Types
import { AnswerObject } from '../App'

type Props = {
    question:string,
    answers: string[],
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined;
    questionNr: number,
    totalQuestions: number
}

// Functional component
const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => (
    <div>
        <p className="number">
            Question: {questionNr} /{totalQuestions}
        </p>
        {/* It's difficult to know what is going to be injected there but it's safe en arrow function */}
        <p dangerouslySetInnerHTML={{__html: question}}></p>
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
    
    )

export default QuestionCard;