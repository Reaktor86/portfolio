import React, {useState} from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    width: 100%;
    max-width: 250px;
    height: 25px;
`

const Select = ({ selected, handleChange }) => {

    return (
        <StyledSelect onChange={handleChange} value={selected}>
            <optgroup label='Срочность'>
                <option value='none'>Не указывать</option>
                <option value='priority1'>(1) Важная срочная</option>
                <option value='priority2'>(2) Важная несрочная</option>
                <option value='priority3'>(3) Неважная срочная</option>
                <option value='priority4'>(4) Неважная несрочная</option>
            </optgroup>
        </StyledSelect>
    );
};

export default Select;