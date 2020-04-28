import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './assets/style.module.css';
import quizService from './quizService';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

export default class Quiz extends Component {
    state = {
        questionsBank: [],
        score: 0,
        responses: 0
    }

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionsBank: question
            })
        })
    }

    componentDidMount() {
        this.getQuestions()
    }

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>Quiz</div>
                {this.state.questionsBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionsBank.map(
                        ({ question, answers, correct, questionId }) => (
                            <QuestionBox
                                question={question}
                                options={answers}
                                key={questionId}
                                selected={answer => this.computeAnswer(answer, correct)} />
                        )
                    )}

                {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
            </div>
        )
    }
}

ReactDOM.render(<Quiz />, document.getElementById('root'));