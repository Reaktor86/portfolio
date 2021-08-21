import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Select from "./UI/Select";

const StyledTask = styled.div`
  display: flex;
  max-width: 500px;
  gap: 15px;
  align-items: start;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 7px;
  background: white;

  p {
    margin: 2px 0 0 0;
    flex-grow: 1;
    font-size: 14px;
  }

  &:hover {
    box-shadow: inset 0 0 6px 3px rgba(0,0,0,0.2);
  }
`

const Task = ({ text, priority }) => {

    const [selected, setSelected] = useState('none');

    useEffect(() => {
        setSelected(priority)
    }, [priority])

    console.log('рендер Task');

    return (
        <StyledTask>
            <input
                type='checkbox'
            />
            <p>{text}</p>
            <Select
                width='50px'
                height='1.3rem'
                selected={selected}
                handleChange={(e) => setSelected(e.target.value)}
            />
            <button>X</button>
        </StyledTask>
    );
};

export default Task;