import React, { useState } from 'react'

import './scss/app.scss';

import { Routes, Route } from 'react-router-dom';

import { QuestionsCard } from './components/QuestionsCard'
import { Result } from './components/Result'

import { questions } from './components/Questions'
import { ResultPage } from './components/ResultPage';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  return (
    <div className='App'>
      <div className='container'>
      <Routes>
        {
          step !== questions.length ? 
            (
              <Route path='/' element={<QuestionsCard question={question} step={step} setStep={setStep} setCorrect={setCorrect} correct={correct} />}></Route>
            )
            : (
              <Route path='/' element={<Result correct={correct} />}></Route>
            )
        }
          <Route path='answers' element={<ResultPage />}></Route>
        </Routes>
      </div>
    </div>
  )
}
export default App