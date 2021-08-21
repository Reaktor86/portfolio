import React, {useEffect, useState} from 'react';
import Task from "./Task";
import styled from 'styled-components';

const StyledTaskList = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  padding: 20px 10px;
  background: ${props => {
      switch (props.type) {
          case 'priority1': return '#fddbdb';
          case 'priority2': return '#ffd6b7';
          case 'priority3': return '#addbff';
          case 'priority4': return '#d2ffc2';
          default: return '#d4d4d4';
      }
}};
  .heading {
    width: 60%;
    min-width: 240px;
    padding: 10px;
    background: ${props => {
    switch (props.type) {
        case 'priority1': return '#ff9797';
        case 'priority2': return '#ffb77e';
        case 'priority3': return '#83d4ff';
        case 'priority4': return '#a2ff8a';
        default: return '#959595';
    }
}};
    box-shadow: 3px 3px 6px 2px rgba(0,0,0,0.1);
    margin: 0 0 20px -20px;
    
    h2 {
        font-family: "Russo One", sans-serif;
        font-size: 18px;
        margin: 0;
    }
  }
  
  .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
  }
  
  .empty {
    margin: 0 0 0 20px;
    color: #8a8a8a;
    
  }
`

const headers = {
    none: 'Не сортировано',
    priority1: 'Важные срочные',
    priority2: 'Важные несрочные',
    priority3: 'Неважные срочные',
    priority4: 'Неважные несрочные',
}

const TaskList = ({ list, type }) => {

    console.log('рендер TaskList', list);

    return (
        <StyledTaskList type={type}>
            <div className='heading'>
                <h2>{ headers[type] ? headers[type] : headers.none }</h2>
            </div>
            <div className='list'>
                {
                    list.map((item) => {
                        if (item.priority === type) {
                            return <Task
                                text={item.text}
                                priority={item.priority}
                                key={item.id}
                            />
                        }
                    })
                }
                {
                    !list.length && <p className='empty'>пусто</p>
                }
            </div>
        </StyledTaskList>
    );
};

export default TaskList;

/*
TODO
сделать состояние контейнера: какой у него тип и в зависимости от типа фильровать данные
 */