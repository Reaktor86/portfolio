import React from 'react';
import TaskList from './TaskList';

export default {
    component: TaskList,
    title: 'TaskList',
};

const Template = args => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    list: [
        {
            id: 1,
            text: 'Бегать',
            priority: 'priority1',
        },
        {
            id: 2,
            text: 'За сахаром',
            priority: 'priority2',
        },
        {
            id: 3,
            text: 'Выучить сторибук',
            priority: 'priority3',
        },
    ]
};
