import React from 'react';
import styled from 'styled-components';
import Select from "./UI/Select";

const StyledTask = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  gap: 15px;
  align-items: start;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 7px;

  p {
    margin: 0;
    flex-grow: 1;
  }

  &:hover {
    box-shadow: inset 0 0 6px 3px rgba(0,0,0,0.2);
  }
`

const Task = ({ text, priority, handleCheck, handleEdit, handleMove, handleRemove }) => {
    return (
        <StyledTask>
            <input
                type='checkbox'
                onClick={handleCheck}
            />
            <p onClick={handleEdit}>{text}</p>
            <Select
                width='50px'
                height='1.3rem'
                selected={priority}
                handleChange={handleMove}
            />
            <button onClick={handleRemove}>X</button>
        </StyledTask>
    );
};

export default Task;