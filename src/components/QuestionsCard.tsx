import React, {Dispatch, SetStateAction} from 'react'

import { questions } from './Questions';

interface Question {
    title: string;
    variants: string[];
    correct: number;
};

  
export const QuestionsCard: React.FC<{ question: Question; step: number; setStep: Dispatch<SetStateAction<number>>; setCorrect: Dispatch<SetStateAction<number>>; correct: number; }> = ({ question, step, setStep, setCorrect, correct }) => {
    
    const percentage = Math.round(step / questions.length * 100);

    const handleClick = (index: number) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    };
  
    return (
    <div className='questions__card' style={{width: '300px', background: '#f6f6f6', margin: '0 auto', marginTop: '150px'}}>
        <div className='questions__card--inner'>
            <div className='questions__card--progress' style={{width: `${percentage}%`, height: '10px', background: '#123'}}></div>
            <h2 className='questions__card--title'>{question.title}</h2>
            <ul className='questions__card--list'>
                {question.variants.map((variant, index) => (
                    <li onClick={() => handleClick(index)} key={index}>{variant}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
