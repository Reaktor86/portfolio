import React from "react";

const Quiz = React.lazy(() => import('./pages/quiz/Quiz'));
const LodashSandbox = React.lazy(() => import('./pages/Sandbox/LodashSandbox'));
const MomentSandbox = React.lazy(() => import('./pages/Sandbox/MomentSandbox'));
const GithubRepo = React.lazy(() => import('./pages/github_repo/GithubRepo'));
const AppImpulse = React.lazy(() => import('./pages/the-impulse/App'));
const AppTodo = React.lazy(() => import('./pages/todo/App'));
const RenderProps = React.lazy(() => import('./pages/render-props/RenderProps'));
const Json = React.lazy(() => import('./pages/json-placeholder/App'));

export const pagesList = [
    {
        id: 1,
        name: 'Github Repo',
        desc: 'Приложение для загрузки репозиториев пользователей с Github.',
        tech: 'React, render props, MomentJS, Axios, createPortal, media tags',
        link: '/github-repo',
        comp: GithubRepo,
    },
    {
        id: 2,
        name: 'JSON Placeholder',
        desc: 'Приложение, которое загружает списки с сайта JSON Placeholder',
        tech: 'React, Redux, Redux Toolkit',
        link: '/json-placeholder',
        comp: Json,
    },
    {
        id: 3,
        name: 'The Impulse Demo',
        desc: 'Небольшая браузерная логическая игра, в которой нужно перемещаться между квадратами в соответствии с цветовыми схемами.',
        tech: 'React, Redux, Middleware, Redux Thunk, TypeScript, SCSS',
        link: '/the-impulse',
        comp: AppImpulse,
    },
    {
        id: 4,
        name: 'Quiz',
        desc: 'Игра "Викторина". 10 вопросов с таймером. Таблица рекордов.',
        tech: 'React, createPortal, local storage, Styled-components, Lodash',
        link: '/quiz',
        comp: Quiz,
    },
    {
        id: 5,
        name: 'Lodash Sandbox',
        desc: 'Эксперименты с Lodash',
        tech: 'Lodash',
        link: '/lodash',
        comp: LodashSandbox,
    },
    {
        id: 6,
        name: 'MomentJS Sandbox',
        desc: 'Эксперименты с MomentJS',
        tech: 'MomentJS',
        link: '/moment',
        comp: MomentSandbox,
    },
    {
        id: 7,
        name: 'Todo',
        desc: 'Приложение для ведения списка дел. Использует матрицу Эйзенхауэра для эффективного решения задач.',
        tech: 'React, Storybook, Styled components, local storage, css grid, TypeScript',
        link: '/todo',
        comp: AppTodo,
    },
    {
        id: 8,
        name: 'Render Props',
        desc: 'Тренировка render props',
        tech: 'React, render props',
        link: '/render-props',
        comp: RenderProps,
    },
]
