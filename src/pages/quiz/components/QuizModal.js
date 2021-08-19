import React from 'react';
import QuizButton from "../hoc/QuizButton";
import Modal from "../../../hoc/Modal/Modal";
import styled from 'styled-components';

const StyledQuizModal = styled.div`
  height: 26%;
  background: #fff;
  border: 2px solid green;
  padding: 45px 115px;

  .modal__btns {
    display: flex;
    justify-content: space-between;
  }

  .quizBtn__red {
    background: #ff6363;
    border: 2px solid #db0909;
  }

  .quizBtn__red:hover {
    background: #db0909;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
  }
`

function QuizModal(props) {
    return (
        <Modal>
            <div className='modal__bg'>
                <StyledQuizModal>
                    <p>Вы действительно хотите прервать викторину?</p>
                    <QuizButton>
                        <div className='modal__btns'>
                            <button
                                className='quizBtn__red'
                                onClick={() => props.setGameState('menu')}
                            >Да
                            </button>
                            <button
                                onClick={() => props.setShowModal()}
                            >Отмена
                            </button>
                        </div>
                    </QuizButton>
                </StyledQuizModal>
            </div>
        </Modal>
    )
}

export default QuizModal;