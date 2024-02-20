import css from './Feedback.module.css'

export default function Feedback({ clicks, totalFeedback, perPositiveFeedback }) {
    return (
        <div className={css.container}>
        <p>Good: {clicks.good}</p>
        <p>Neutral: {clicks.neutral}</p>
        <p>Bad: {clicks.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {perPositiveFeedback} %</p>
        </div>
    )
}