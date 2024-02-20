import css from './Options.module.css'

export default function Options({ updateFeedback, totalFeedback, resetFeedback }) {
    const handleClick = feedbackType => {
        updateFeedback(feedbackType);
    }  
    const handleReset = () => {
        resetFeedback();
    }
    return (
        <div className={css.container}>
            <button className={css.btn} onClick={() => handleClick("good")}>Good</button>
            <button className={css.btn} onClick={() => handleClick("neutral")}>Neutral</button>
            <button className={css.btn} onClick={() => handleClick("bad")}>Bad</button>
            {totalFeedback !==0 && <button className={css.btn} onClick={handleReset}>Reset</button>}
            
        </div>
    )
}