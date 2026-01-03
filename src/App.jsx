import { useState } from "react"
import { questions } from "./assets/questions"

function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  const question = currentQuestion.question
  const options = currentQuestion.options.map((option, index) => (<button onClick={() => chooseAnswer(option)} key={index}>{option}</button>))

  const chooseAnswer = answer => setSelectedAnswer(answer)

  const handleSubmit = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) setScore(previousScore => previousScore + 1)
    
    if (currentQuestionIndex === questions.length - 1) {
      setIsFinished(true)
    } else {
      setCurrentQuestionIndex(previousIndex => previousIndex + 1)
    }

    setSelectedAnswer(null)
  }

  return (
    <div>
      {isFinished ? `You scored ${score} / ${questions.length}` : question}
      {!isFinished && options}
      {!isFinished && <button onClick={() => handleSubmit()} disabled={selectedAnswer === null}>Submit</button>}
    </div>
  )
}

export default App
