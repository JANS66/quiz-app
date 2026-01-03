export default function QuizScreen({ question, options, selectedAnswer, onSelect, onSubmit, current, total }) {
    return (
        <div className="quiz-container">
            <p className="quiz-progress">
                Question {current} of {total}
            </p>

            <h2 className="quiz-question">{question}</h2>

            <div className="quiz-options">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`quiz-option ${selectedAnswer === option ? `selected` : ``
                            }`}
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <button
                className="quiz-submit"
                onClick={onSubmit}
                disabled={!selectedAnswer}
            >
                Submit
            </button>
        </div>
    )
}