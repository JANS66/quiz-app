import { useState } from "react"
import { questions } from "./assets/questions"
import QuizScreen from "./components/QuizScreen"
import ResultScreen from "./components/ResultScreen"
import "./App.css"

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

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setIsFinished(false)
  }

  return (
    <div>
      {isFinished ? (
        <ResultScreen
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      ) : (
        <QuizScreen
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
          onSubmit={handleSubmit}
          current={currentQuestionIndex + 1}
          total={questions.length}
        />
      )}
    </div>
  )
}

export default App
