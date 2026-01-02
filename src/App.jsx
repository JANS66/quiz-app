import { useState } from "react"
import { questions } from "./assets/questions"

function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(``)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  return (
    <>
    </>
  )
}

export default App
