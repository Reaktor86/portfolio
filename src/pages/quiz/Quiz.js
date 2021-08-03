import React, {Component} from 'react';
import style from './Quiz.module.scss';
import QuizQuestion from "./components/QuizQuestion";
import QuizMain from "./components/QuizMain";

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Игрок 1',
            timerInitial: 15,
            totalQuestions: 5,
            gameProcessing: false,
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

    switchGameProcessing() {
        this.setState({gameProcessing: !this.state.gameProcessing})
    }

    render() {
        return (
            <div className={style.Quiz}>
                <h1>Кто хочет стать миллионером?</h1>
                <div className={style.cont}>
                    {
                        this.state.gameProcessing ?
                            <QuizQuestion
                                timerInitial={this.state.timerInitial}
                                totalQuestions={this.state.totalQuestions}
                            />
                            : <QuizMain
                                updateName={this.updateName.bind(this)}
                                updateTimerInitial={this.updateTimerInitial.bind(this)}
                                updateTotalQuestions={this.updateTotalQuestions.bind(this)}
                                switchGameProcessing={this.switchGameProcessing.bind(this)}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;