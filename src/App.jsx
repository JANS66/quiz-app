import { useState } from "react"
import { questions } from "./assets/questions"

function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(``)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  const question = currentQuestion.question
  const buttons = currentQuestion.options.map((option, index) => (<button onClick={() => chooseAnswer(option)} key={index}>{option}</button>))

  const chooseAnswer = answer => setSelectedAnswer(answer)

  return (
    <div>
      {question}
      {buttons}
    </div>
  )
}

export default App
