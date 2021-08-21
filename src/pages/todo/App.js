import React, {useRef, useState} from 'react';
import './App.scss';
import Form from "./components/Form";
import TaskList from "./components/TaskList";

/*
Important urgent IU
Important non-urgent INU
Unimportant urgent UU
Unimportant non-urgent UNU
 */

const list = [
    {
        id: 1,
        text: 'Бегать',
        priority: 'none',
    },
    {
        id: 2,
        text: 'Важная срочная задача',
        priority: 'priority1',
    },
    {
        id: 3,
        text: 'За сахаром',
        priority: 'priority2',
    },
    {
        id: 4,
        text: 'Выучить сторибук',
        priority: 'priority3',
    },
    {
        id: 5,
        text: 'Посмотреть кино',
        priority: 'priority4',
    },
    {
        id: 6,
        text: 'Покушать',
        priority: 'priority2',
    },
]

const App = () => {

    const [list, setList] = useState([]);

    function handleForm(e, value, selected) {
        e.preventDefault();
        console.log(value + ' ' + selected);
        setList([...list, {
            id: Date.now(),
            text: value,
            priority: selected,
        }]);
    }

    return (
        <div className='Todo'>
            <h1>Список дел</h1>
            <div className='grid'>
                <div className="controls">
                    <Form
                        handleForm={handleForm}
                    />
                </div>
                <div className="todos_IU">
                    <TaskList
                        type='priority1'
                        list={list}
                    />
                </div>
                <div className="todos_INU">
                    <TaskList
                        type='priority2'
                        list={list}
                    />
                </div>
                <div className="todos_UU">
                    <TaskList
                        type='priority3'
                        list={list}
                    />
                </div>
                <div className="todos_UNU">
                    <TaskList
                        type='priority4'
                        list={list}
                    />
                </div>
                <div className="todos_other">
                    <TaskList
                        type='none'
                        list={list}
                    />
                </div>
                <div className="done">Сделанные</div>
            </div>
        </div>
    );
};

export default App;