import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    min-width: 120px;
    height: 1.8rem;
    outline: none;
    border: none;
    background: ${props => props.color === 'red' ? '#e54f4f' : '#f8d8bc'};
    cursor: pointer;
    border-radius: 5px;
    
    &:hover {
        box-shadow: inset -2px -2px 4px 2px rgba(0,0,0,0.2);
    }
`

const Button = ({ text, color }) => {
    return (
        <StyledButton color={color}>
            { text }
        </StyledButton>
    );
};

export default Button;