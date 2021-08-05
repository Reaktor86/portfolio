import React, {useEffect, useState} from 'react';
import style from './QuizQuestion.module.scss';
import {quizList} from "../QuizList";
import QuizButton from "../hoc/QuizButton";
import QuizModal from "./QuizModal";
const _ = require('lodash');

function QuizQuestion(props) {

    const [current, setCurrent] = useState(0);
    const [disable, setDisable] = useState(false);
    const [questionArray, setQuestionArray] = useState([0]);
    const [resultText, setResultText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [timer, setTimer] = useState(15);
    const [timerId, setTimerId] = useState();

    useEffect(() => {

        // перемешиваем вопросы
        const rand = _.range(0, props.totalQuestions);
        setQuestionArray(_.shuffle(rand));

        // таймер
        return () => clearInterval(timerId);

    }, [])

    useEffect(() => {
        if (!disable) {
            setTimer(props.timerInitial);
            const timerId = setInterval(() => {setTimer(prev => prev - 1)}, 1000);
            setTimerId(timerId);
        } else {
            clearInterval(timerId);
        }
    }, [disable])

    useEffect(() => {
        if (timer === 0) {
            clearInterval(timerId);
            setTimeout(() => {
                setResultText('не успели!');
                setDisable(true);
            }, 1000)
        }
    }, [timer])

    function handleAnswer(isCorrect) {
        setDisable(true);
        if (isCorrect) {
            props.raiseScore();
            setResultText('правильно');
        } else {
            setResultText('неправильно');
        }
    }

    function handleNext() {
        if (current >= props.totalQuestions - 1) {
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
                    disable && <div className={style.lock}/>
                }
            </div>
            <div className={style.resultText}>
                {
                    disable ?
                        <p>{resultText}</p>
                        : <p>таймер: <span className={timer < 5 ? style.red : style.green}>{timer}</span></p>
                }
            </div>
            <div className={style.next}>

                {
                    disable &&
                        <>
                        <QuizButton>
                            <button
                                className={style.quizBtn__red}
                                onClick={() => setShowModal(true)}
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
                }
            </div>
            {
                showModal && <QuizModal
                        setGameState={props.setGameState}
                        setShowModal={() => setShowModal(false)}
                    />
            }
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