import React, {useEffect, useState} from 'react';
import style from './QuizQuestion.module.scss';
import {quizList} from "../QuizList";
import QuizButton from "../hoc/QuizButton";
let _ = require('lodash');

function QuizQuestion(props) {

    const [current, setCurrent] = useState(0);
    const [disable, setDisable] = useState(false);
    const [questionArray, setQuestionArray] = useState([0]);
    const [resultText, setResultText] = useState('');

    useEffect(() => {
        const rand = _.range(0, props.totalQuestions);
        setQuestionArray(_.shuffle(rand));
    }, [])

    function handleAnswer(isCorrect) {
        setDisable(true);
        if (isCorrect) {
            props.raiseScore(10);
            setResultText('правильно');
        } else {
            setResultText('неправильно');
        }
    }

    function handleNext() {
        if (current >= props.totalQuestions - 1) {
            console.log('вопросы кончились');
            props.setGameState('over');
            return;
        }
        setCurrent(prev => prev + 1);
        setDisable(false);
    }

    return (
        <div className={style.QuizQuestion}>
            <p className={style.score}>Очки: {props.score}</p>
            <p className={style.head}>Вопрос {current + 1}</p>
            <p className={style.body}>{quizList[questionArray[current]].question}</p>
            <div className={style.answers}>
                {
                    quizList[questionArray[current]].answers.map((item, index) => {
                        return <Answer
                            key={index}
                            disable={disable}
                            index={index}
                            item={item}
                            handleAnswer={handleAnswer}
                        />
                    })
                }
                {
                    disable ?
                        <div className={style.lock}/>
                        : null
                }
            </div>
            <div className={style.resultText}>
                {
                    disable ?
                        <p>{resultText}</p>
                        : null
                }
            </div>
            <div className={style.next}>

                {
                    disable ?
                        <>
                        <QuizButton>
                            <button
                                className={style.quizBtn__red}
                                onClick={() => props.setGameState('menu')}
                            >В меню
                            </button>
                        </QuizButton>
                        <QuizButton>
                            <button
                                onClick={handleNext}
                            >Дальше
                            </button>
                        </QuizButton>
                        </>
                    : null
                }
            </div>
        </div>
    )
}

export default QuizQuestion;

function Answer({ disable, index, item, handleAnswer }) {

    const [styleBtn, setStyleBtn] = useState([style.answerBtn]);


    const handleStyle = () => {
        if (item.isCorrect) {
            setStyleBtn(prev => {
                let newStyle = [...prev];
                newStyle.push(style.correct);
                return newStyle;
            });
        } else {
            setStyleBtn(prev => {
                let newStyle = [...prev];
                newStyle.push(style.wrong);
                return newStyle;
            });
        }
    }

    useEffect(() => {
        if (!disable) {
            setStyleBtn([style.answerBtn]);
        }
    }, [disable])

    let letter;
    switch (index) {
        case 0:
            letter = 'A';
            break;
        case 1:
            letter = 'B';
            break;
        case 2:
            letter = 'C';
            break;
        case 3:
            letter = 'D';
            break;
        default:
            letter = 'A';
    }

    return (
        <button
            className={styleBtn.join(' ')}
            disabled={disable}
            onClick={() => {
                handleAnswer(item.isCorrect);
                handleStyle();
            }}
        >
            {letter}: {item.answerText}
        </button>
    )
}