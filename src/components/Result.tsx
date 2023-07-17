import React from 'react'
import { questions } from './Questions';

import { Link } from 'react-router-dom';

interface Correct {
  correct: number;
}

export const Result: React.FC<Correct> = ({ correct }) => {
  return (
    <div className='questions__container'>
      <div className='questions__card result__card'>
        <h2 className='result__card--result'>Вы ответили правильно {correct} из {questions.length}</h2>
        <div className='result__card--button'>
          <a href='/'>
            <button className='result__card--button--back'>Пройти заново</button>
          </a>
          <Link to='answers'>
            <button className='result__card--button--back'>Посмотреть ответы</button>
          </Link>
        </div>
      </div>
    </div>
  )
}