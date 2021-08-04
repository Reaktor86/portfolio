import React, {useEffect, useState} from 'react';
import style from './QuizMain.module.scss';
import QuizButton from "../hoc/QuizButton";
import QuizStat from "./QuizStat";

function QuizMain(props) {

    const [name, setName] = useState('Игрок 1');
    const [count, setCount] = useState(5);
    const [time, setTime] = useState('step3');
    const [scoreCountBonus, setScoreCountBonus] = useState(0);
    const [scoreTimeBonus, setScoreTimeBonus] = useState(0);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleCount = (e) => {
        const count = +e.target.value;
        if (count < 5 || count > 10) {
            return;
        }
        setCount(count);

        switch(count) {
            case 10:
                setScoreCountBonus(5);
                break;
            case 9:
                setScoreCountBonus(4);
                break;
            case 8:
                setScoreCountBonus(3);
                break;
            case 7:
                setScoreCountBonus(2);
                break;
            case 6:
                setScoreCountBonus(1);
                break;
            default:
                setScoreCountBonus(0);
        }
    }

    const handleTime = (e) => {
        setTime(e.target.value);
        switch(e.target.value) {
            case 'step1':
                setScoreTimeBonus(5);
                break;
            case 'step2':
                setScoreTimeBonus(2);
                break;
            default:
                setScoreTimeBonus(0);
        }
    }

    const handleForm = (e) => {
        e.preventDefault();
        props.updateName(name);
        props.updateTotalQuestions(count);
        let val = 15;
        if (time === 'step1') {
            val = 5;
        } else if (time === 'step2') {
            val = 10;
        }
        props.updateTimerInitial(val);
        props.setGameState('playing');
    }

    useEffect(() => {
        props.setScoreStep(scoreCountBonus + scoreTimeBonus);
    }, [scoreCountBonus, scoreTimeBonus])

    return (
        <div className={style.QuizMain}>
            <form onSubmit={handleForm}>
                <p>Имя:</p>
                <input type='text' value={name} placeholder='введите имя' onChange={handleName}/>
                <p>Количество вопросов (5-10):</p>
                <input type='number' value={count} onChange={handleCount}/>
                <p>Время на ответ:</p>
                <select onChange={handleTime} value={time}>
                    <option value='step1'>5 с.</option>
                    <option value='step2'>10 с.</option>
                    <option value='step3'>15 с.</option>
                </select>
                <p className={style.scoreStep}>Очков за правильный ответ: <span>{props.scoreStep}</span></p>
                <QuizButton>
                    <button>Начать</button>
                </QuizButton>
            </form>
            {/*показывается в начале игры*/}
            <QuizStat
                recordTable={props.recordTable}
            />
        </div>
    )
}

export default QuizMain;