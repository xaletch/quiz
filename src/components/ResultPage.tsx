import React from 'react'

import { questions } from './Questions'

interface Correct {
    correct: number
}

export const ResultPage: React.FC<Correct> = ({ correct }) => {
  return (
    <div className='questions__container'>
        <div className='questions__card'>
            <ul className='questions__result--list'>
                {questions.map((item, index) => (
                    <div className='questions__result--card' key={index}>
                        <h3 className='questions__result--title'>{item.title}</h3>
                        <ul>
                            {item.variants.map((variant, index) => (
                                <li key={index} className={index === item.correct ? 'questions__result--item correct' : 'questions__result--item'}>{variant}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul>
        </div>
    </div>
  )
}
