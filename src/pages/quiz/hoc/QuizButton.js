import React from 'react';
import style from './QuizButton.module.scss';

function QuizButton(props) {
    return (
        <div className={style.QuizButton}>
            {props.children}
        </div>
    )
}

export default QuizButton;