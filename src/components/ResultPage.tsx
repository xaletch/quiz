import React from 'react'

import { questions } from './Questions';

export const ResultPage = () => {
  return (
    <div className='questions__result'>
        <div className='questions__card questions__result--card'>
            <a href='/'>
                <div style={{textAlign: 'end'}}>
                    <button className='result__card--button--back'>Пройти заново</button>
                </div>
             </a>
            <ul className='questions__result--list'>
                {questions.map((item, index) => (
                    <div className='questions__result--card' key={index}>
                        <h3 className='questions__result--title'>{item.title}</h3>
                        <ul>
                            {item.variants.map((variant, index) => (
                                <li key={index} 
                                className={
                                    index === item.correct 
                                    ? 'questions__result--item correct' 
                                    : 'questions__result--item'
                                }>{variant}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul>
        </div>
    </div>
  )
}
