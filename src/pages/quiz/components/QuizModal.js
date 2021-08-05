import React from 'react';
import style from './QuizModal.module.scss';
import QuizButton from "../hoc/QuizButton";
import Modal from "../../../hoc/Modal/Modal";

function QuizModal(props) {
    return (
        <Modal>
            <div className='modal__bg'>
                <div className={style.modal__cont}>
                    <p>Вы действительно хотите прервать викторину?</p>
                    <QuizButton>
                        <div className={style.modal__btns}>
                            <button
                                className={style.quizBtn__red}
                                onClick={() => props.setGameState('menu')}
                            >Да</button>
                            <button
                                onClick={() => props.setShowModal()}
                            >Отмена</button>
                        </div>
                    </QuizButton>
                </div>
            </div>
        </Modal>
    )
}

export default QuizModal;