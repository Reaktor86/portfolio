import React, {useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import Select from "./UI/Select";
import styled from 'styled-components';

const StyledForm = styled.form`

    margin-bottom: 30px;

    fieldset {
        display: flex;
        gap: 25px;
        border: none;
        padding: 0;
    }
`

const Form = () => {

    const [value, setValue] = useState('');
    const [selected, setSelected] = useState('none');

    function handleForm(e) {
        e.preventDefault();
        console.log(
            'value = ' + value + ' selected = ' + selected
        );
        setValue('');
    }

    return (
        <>
        <StyledForm onSubmit={handleForm}>
            <p>Задача:</p>
            <fieldset>
                <Input
                    placeholder='Введите задачу'
                    handleInput={(e) => setValue(e.target.value)}
                    value={value}
                />
                <Button
                    text='Добавить'
                    color={value === '' ? 'red' : null}
                />
            </fieldset>
            <p>Срочность:</p>
            <Select
                selected={selected}
                handleChange={(e) => setSelected(e.target.value)}
            />
        </StyledForm>
        </>
    );
};

export default Form;

/*
TODO:
компонент задача
компонент список задач
компонент сделанные

пользователь может добавить строку из одних пробелов
 */