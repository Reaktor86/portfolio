import React, {Component} from 'react';
import style from './Quiz.module.scss';
import QuizQuestion from "./components/QuizQuestion";
import QuizMain from "./components/QuizMain";
import QuizStat from "./components/QuizStat";
import QuizButton from "./hoc/QuizButton";
let _ = require('lodash');

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Игрок 1',
            timerInitial: 15,
            totalQuestions: 5,
            gameState: 'menu', // menu, playing, over
            recordTable: [],
            score: 0,
            scoreStep: 10,
        }
    }

    updateName(val) {
        this.setState({name: val})
    }

    updateTimerInitial(val) {
        this.setState({timerInitial: val})
    }

    updateTotalQuestions(val) {
        this.setState({totalQuestions: val})
    }

    setGameState(newState) {
        this.setState({gameState: newState})
        if (newState === 'menu') {
            this.setState({
                score: 0
            })
        }
    }

    componentDidMount() {
        let save = localStorage.getItem('quiz');
        if (save) {
            save = _.orderBy(JSON.parse(save), ['score'], ['desc']);
            this.setState({
                recordTable: save
            })
        } else {
            console.log('нет записей о рекордах');
        }
    }

    addRowToRecordTable(row) {
        let tableCopy = [...this.state.recordTable];
        tableCopy.push(row);
        tableCopy = _.orderBy(tableCopy, ['score'], ['desc']);
        this.setState({
            recordTable: tableCopy
        })
        localStorage.setItem('quiz', JSON.stringify(tableCopy));
    }

    raiseScore(val) {
        this.setState({
            score: this.state.score + val
        })
    }

    setScoreStep(add) {
        this.setState({
            scoreStep: 10 + add
        })
    }

    render() {
        return (
            <div className={style.Quiz}>
                <h1>Викторина</h1>
                <div className={style.cont}>
                    {
                        this.state.gameState === 'playing' ?
                            <QuizQuestion
                                timerInitial={this.state.timerInitial}
                                totalQuestions={this.state.totalQuestions}
                                setGameState={this.setGameState.bind(this)}
                                score={this.state.score}
                                raiseScore={this.raiseScore.bind(this)}
                            />
                            : this.state.gameState === 'menu' ?
                                <QuizMain
                                updateName={this.updateName.bind(this)}
                                updateTimerInitial={this.updateTimerInitial.bind(this)}
                                updateTotalQuestions={this.updateTotalQuestions.bind(this)}
                                setGameState={this.setGameState.bind(this)}
                                recordTable={this.state.recordTable}
                                addRowToRecordTable={(row) => this.addRowToRecordTable(row)}
                                scoreStep={this.state.scoreStep}
                                setScoreStep={this.setScoreStep.bind(this)}
                            />
                            : <div className={style.over}>
                                    {/*показывается в конце игры*/}
                                    <QuizStat
                                        gameState={this.state.gameState}
                                        recordTable={this.state.recordTable}
                                        addRowToRecordTable={(row) => this.addRowToRecordTable(row)}
                                        name={this.state.name}
                                        score={this.state.score}
                                    />
                                    <QuizButton>
                                        <button
                                            onClick={() => this.setGameState('menu')}
                                        >В меню
                                        </button>
                                    </QuizButton>
                                </div>
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;

/* TODO:
- очки за правильный ответ - изменения score
- модальное окно: вы уверены, что хотите прервать викторину?
- эксперименты с контекстом, чтобы убрать грязь в коде (обязательно резервная копия!!!)
- лодаш - убрать бинды
- анимация (обязательно резервная копия!!!)
- почистить консоль от ошибок
- изучить и внедрить styled-components (обязательно резервная копия!!!)
*/
