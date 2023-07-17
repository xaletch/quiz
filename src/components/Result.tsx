import React from 'react'

interface Correct {
  correct: number;
}

export const Result: React.FC<Correct> = ({correct}) => {
  return (
    <div className='result__card'>
      <div className='result__card--inner'>
        <h2 className='result__card--result'>Вы ответили на {correct} вопросов из 10</h2>
      </div>
    </div>
  )
}
