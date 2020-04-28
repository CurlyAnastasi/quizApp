import React, { useState } from 'react';
import styles from '../assets/style.module.css';

export default function QuestionBox({ question, options, selected }) {
    const [answer, setAnswer] = useState(options)
    return (
        <div className={styles.questionBox}>
            <div className={styles.question}>{question}</div>
            {answer.map(
                (text, index) => (
                    <button key={index} className={styles.answerBtn} onClick={() => {
                        setAnswer([text]);
                        selected(text);
                    }

                    }>
                        {text}
                    </button>
                )
            )}
        </div>
    )
}
