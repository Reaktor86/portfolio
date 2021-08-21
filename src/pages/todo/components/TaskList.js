import React from 'react';
import Task from "./Task";
import styled from 'styled-components';

const StyledTaskList = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const TaskList = ({ list }) => {

    return (
        <StyledTaskList>
            {
                list.map(item => <Task
                    text={item.text}
                    priority={item.priority}
                    key={item.id}
                />)
            }
        </StyledTaskList>
    );
};

export default TaskList;

/*
TODO
сделать состояние контейнера: какой у него тип и в зависимости от типа фильровать данные
 */