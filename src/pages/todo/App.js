import React, {useEffect, useState} from 'react';
import './App.scss';
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import DoneList from "./components/DoneList";

export const TaskContext = React.createContext({})

/*
Important urgent IU
Important non-urgent INU
Unimportant urgent UU
Unimportant non-urgent UNU
 */

const App = () => {

    const [list, setList] = useState([]);
    const [done, setDone] = useState([]);
    const [cancelled, setCancelled] = useState([]);

    useEffect(() => {

        const save = localStorage.getItem('Todo');
        if (save) {
            const data = JSON.parse(save);
            setList(data.list);
            setDone(data.done);
            setCancelled(data.cancelled);
            console.log('данные возвращены из localStorage');
        } else {
            console.log('данные не найдены');
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('Todo', JSON.stringify({
            list: list,
            done: done,
            cancelled: cancelled,
        }));
        console.log('данные сохранены');
    }, [list, done, cancelled])

    function handleForm(e, value, selected) {

        e.preventDefault();
        setList([...list, {
            id: Date.now(),
            text: value,
            priority: selected,
        }]);
    }

    function addDone(item) {

        setList(list.filter(task => task.id !== item.id));
        setDone([...done, item]);
    }

    function addCancelled(item) {

        setList(list.filter(task => task.id !== item.id));
        setCancelled([...cancelled, item]);
    }

    function confirmEdit(task, newText) {

        const update = list.map(item => {
            if (item.id === task.id) {
                return {...item, text: newText}
            }
            return item;
        });
        setList(update);
    }

    function confirmMove(task, newPriority) {

        const update = list.map(item => {
            if (item.id === task.id) {
                return {...item, priority: newPriority}
            }
            return item;
        });
        setList(update);
    }

    function handleClear(listToDelete) {

        if (listToDelete === done) {
            setDone([]);
        } else {
            setCancelled([]);
        }
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
                <TaskContext.Provider value={{ addDone, addCancelled, confirmEdit, confirmMove }}>
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
                </TaskContext.Provider>
                <div className="done">
                    <DoneList
                        typeText='Сделано'
                        list={done}
                        handleClear={handleClear}
                    />
                    <DoneList
                        typeText='Отменено'
                        list={cancelled}
                        handleClear={handleClear}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;