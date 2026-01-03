export default function ResultScreen({score, total, onRestart}) {
    return (
        <>
            <h2>You scored {score} / {total}</h2>
            <button onClick={onRestart}>Restart Quiz</button>
        </>
    )
}