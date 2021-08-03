import React, {useState} from 'react';
import style from './QuizMain.module.scss';

function QuizMain(props) {

    const [name, setName] = useState('Игрок 1');
    const [count, setCount] = useState(5);
    const [time, setTime] = useState('step3');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleCount = (e) => {
        if (e.target.value < 5 || e.target.value > 10) {
            return;
        }
        setCount(e.target.value);
    }

    const handleTime = (e) => {
        setTime(e.target.value);
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
        props.switchGameProcessing();
    }

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
                <button className='quizBtn'>Начать</button>
            </form>
        </div>
    )
}

export default QuizMain;