import React, {useState} from 'react';
import style from './QuizQuestion.module.scss';

const quizList = [
    {
        question: 'Что такое React?',
        answers: {
            A: 'Фреймворк',
            B: 'Библиотека',
            C: 'База данных',
            D: 'Облачко'
        },
        right: 'B',
    },
    {
        question: 'Выберите из списка то, что не относится к методологиям разработки.',
        answers: {
            A: 'Angular',
            B: 'V-Model',
            C: 'Kanban',
            D: 'Waterfall'
        },
        right: 'A',
    },
    {
        question: 'Поговорим о Flexbox. Что делает justify-content?',
        answers: {
            A: 'Выравнивает контент по центральной оси',
            B: 'Выравнивает контент по поперечной оси',
            C: 'Выравнивает контент по главной оси',
            D: 'Регулирует фактор сжимаемости отдельного элдемента'
        },
        right: 'C',
    },
    {
        question: 'Почему программист не пришёл на работу?',
        answers: {
            A: 'Он тут не работает',
            B: 'Перепутал воскресенье и понедельник',
            C: 'Жена рожает',
            D: 'Перешёл на удалёнку'
        },
        right: 'D',
    },
    {
        question: 'Что способствовало поражению ливонских рыцарей во время Ледового побоища?',
        answers: {
            A: 'Началась пурга',
            B: 'Провалился лед',
            C: 'Затупились коньки',
            D: 'Пропустили шайбу'
        },
        right: 'B',
    },
    {
        question: 'Закончите фразу из «Карнавальная ночь»: «Есть ли жизнь на Марсе, нет ли жизни на Марсе — это…»?',
        answers: {
            A: 'Науке неизвестно',
            B: 'Галилей не понял',
            C: 'Армстронг не сказал',
            D: 'Учёные не признаются'
        },
        right: 'A',
    },
    {
        question: 'В какой стране под Новый год из окна выбрасывают старые вещи?',
        answers: {
            A: 'Германия',
            B: 'Испания',
            C: 'Греция',
            D: 'Италия'
        },
        right: 'D',
    },
    {
        question: 'Что нельзя увеличить, а только уменьшить?',
        answers: {
            A: 'Масштаб страницы браузера',
            B: 'Картинку в Фотошопе',
            C: 'Звёзды через телескоп',
            D: 'Твою зарплату'
        },
        right: 'D',
    },
    {
        question: 'Какого цвета фон у этого приложения?',
        answers: {
            A: 'Синий',
            B: 'Жёлтый',
            C: 'Зелёный',
            D: 'Красный'
        },
        right: 'C',
    },
    {
        question: 'Что не является методом массива в JavaScript?',
        answers: {
            A: 'fill()',
            B: 'redux()',
            C: 'join()',
            D: 'reduce()'
        },
        right: 'B',
    },
]

function QuizQuestion(props) {

    const [current, setCurrent] = useState(0);
    const [disable, setDisable] = useState(false);

    function answered(e) {
        console.log(e);
        setDisable(true);
    }

    return (
        <div className={style.QuizQuestion}>
            <p className={style.head}>Вопрос {current + 1}</p>
            <p>{quizList[current].question}</p>
            <button onClick={answered} disabled={disable}>
                A: {quizList[current].answers.A}
            </button>
            <button onClick={answered} disabled={disable}>
                B: {quizList[current].answers.B}
            </button>
            <button onClick={answered} disabled={disable}>
                C: {quizList[current].answers.C}
            </button>
            <button onClick={answered} disabled={disable}>
                D: {quizList[current].answers.D}
            </button>
        </div>
    )
}

export default QuizQuestion;
