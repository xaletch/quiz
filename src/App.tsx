import React, { useState } from 'react'

import './scss/app.scss';

import { QuestionsCard } from './components/QuestionsCard'
import { Result } from './components/Result'

import { questions } from './components/Questions'
import { ResultPage } from './components/ResultPage';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(0)
  const [correct, setCorrect] = useState(0)

  const question = questions[step]

  console.log(correct)

  return (
    <div className='App'>
      <div className='container'>
        {
          step !== questions.length ? 
            (
              <QuestionsCard question={question} step={step} setStep={setStep} setCorrect={setCorrect} correct={correct} />
            )
            : (
              <Result correct={correct} />
            )
        }
        {/* <ResultPage correct={correct} /> */}
      </div>
    </div>
  )
}
export default App