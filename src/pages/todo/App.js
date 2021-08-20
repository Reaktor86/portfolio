import React from 'react';
import style from './App.scss';
/*
Important urgent IU
Important non-urgent INU
Unimportant urgent UU
Unimportant non-urgent UNU
 */

const App = () => {
    return (
        <div className='Todo'>
            <h1>Список дел</h1>
            <div className='grid'>
                <div className="controls">Управление</div>
                <div className="todos_IU">Важные срочные</div>
                <div className="todos_INU">Важные несрочные</div>
                <div className="todos_UU">Неважные срочные</div>
                <div className="todos_UNU">Неважные несрочные</div>
                <div className="todos_other">Другие</div>
                <div className="done">Сделанные</div>
            </div>
        </div>
    );
};

export default App;