import React from 'react'
import { questions } from './Questions';

interface Correct {
  correct: number;
}

export const Result: React.FC<Correct> = ({correct}) => {
  return (
    <div className='questions__container'>
      <div className='questions__card result__card'>
        <h2 className='result__card--result'>Вы ответили правильно {correct} из {questions.length}</h2>
        <div className='result__card--button'>
          <a href='/'>
            <button className='result__card--button--back'>Пройти заново</button>
          </a>
          <button className='result__card--button--back'>Сверить ответы</button>
        </div>
      </div>
    </div>
  )
}