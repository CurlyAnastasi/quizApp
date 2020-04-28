import React from 'react';
import styles from '../assets/style.module.css';

export default function Result({ score, playAgain }) {
    return (
        <div className={styles.scoreBoard}>
            <div className={styles.score}> You score {score} / 5 correct answers!</div>
            <button className={styles.playBtn} onClick={playAgain}>Play again!</button>
        </div>
    )
}
