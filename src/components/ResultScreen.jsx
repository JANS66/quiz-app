export default function ResultScreen({ score, total, onRestart }) {
    return (
        <div className="result-container">
            <h2 className="result-score">
                You scored {score} / {total}
            </h2>

            <button className="quiz-submit" onClick={onRestart}>
                Restart Quiz
            </button>
        </div>
    )
}