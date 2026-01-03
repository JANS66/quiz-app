export default function QuizScreen({ question, options, selectedAnswer, onSelect, onSubmit, current, total }) {
    return (
        <>
            <p>(Question {current} of {total})</p>
            <h2>{question}</h2>

            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(option)}
                >
                    {option}
                </button>
            ))}

            <button onClick={onSubmit} disabled={!selectedAnswer}>
                Submit
            </button>
        </>
    )
}