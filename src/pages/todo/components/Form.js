import React, {useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import Select from "./UI/Select";

const styleForm = {
    display: 'flex',
    gap: '25px',
    border: 'none',
    padding: 0,
}

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
        <form onSubmit={handleForm} style={{ marginBottom: '30px' }}>
            <p>Задача:</p>
            <fieldset style={styleForm}>
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
        </form>
        </>
    );
};

export default Form;

/*
TODO:
Сделать строи для формы
компонент задача
компонент список задач
компонент сделанные

пользователь может добавить строку из одних пробелов
 */