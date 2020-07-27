import React from "react";

type Props = {
    question:string,
    answer: string[],
    callback: any,
    userAnswer: string;
    questionNr: number,
    totalQuestions: number
}

// Functional component
const QuestionCard: React.FC<Props> = ({
    question, 
    answer, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => (
    <div>
        <p className="number">
            Question: {questionNr} /{totalQuestions}
        </p>
        <div>Question Card</div>
    </div>
    
    )

export default QuestionCard;