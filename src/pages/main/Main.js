import React, {useState} from 'react';
import './Main.scss';
import enter from './img/enter.png';
import photo from './img/profile/T24TEY8fPSs.jpg';
import Card from "./components/Card";

const Main = () => {

    const [cards, setCards] = useState([
        {
            id: 1,
            name: 'Github Repo',
            desc: 'Приложение для загрузки репозиториев пользователей с Github.',
            tech: 'React, Render-props, MomentJS, Axios, createPortal, media tags',
            link: '/github-repo',
        },
        {
            id: 2,
            name: 'The Impulse Demo',
            desc: 'Небольшая браузерная логическая игра, в которой нужно перемещаться между квадратами в соответствии с цветовыми схемами.',
            tech: 'React, Redux, Middleware, Redux Thunk, TypeScript, SCSS',
            link: '/the-impulse'
        },
        {
            id: 3,
            name: 'Quiz',
            desc: 'Игра "Викторина". 10 вопросов с таймером. Таблица рекордов.',
            tech: 'React, createPortal, local storage, Styled-components, Lodash',
            link: '/quiz'
        },
        {
            id: 4,
            name: 'Lodash Sandbox',
            desc: 'Эксперименты с Lodash',
            tech: 'Lodash',
            link: '/lodash'
        },
        {
            id: 5,
            name: 'MomentJS Sandbox',
            desc: 'Эксперименты с MomentJS',
            tech: 'MomentJS',
            link: '/moment'
        },
        {
            id: 6,
            name: 'Todo',
            desc: 'Приложение для ведения списка дел. Использует матрицу Эйзенхауэра для эффективного решения задач.',
            tech: 'React, Storybook, Styled components, local storage, css grid',
            link: '/todo'
        },
    ]);
    const [searchQuery, setSearchQuery] = useState('');

    function handleSelect(val) {
        console.log('ВЫЗОВ сортировки handleSelect');
        const option = val.target.value; // приходит id, name, desc
        setCards([...cards].sort((a, b) => {
                // '' + нужен для конвертации id в string, иначе localeCompare вылетает с ошибкой
                return ('' + a[option]).localeCompare(('' + b[option]));
            })
        );
    }

    return (
        <div className='Portfolio'>
            <header>
                <div className='header__container'>
                    <a className='logo' href='#'>portfolio</a>
                    <div className='enter'>
                        <img src={enter} alt='вход'/>
                        <p>Войти</p>
                    </div>
                </div>
            </header>

            <main>
                <div className='container'>
                    <div className="profile">
                        <div className="profile__photo">
                            <img src={photo} alt='фотография'/>
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td>Имя:</td>
                                <td>Олег</td>
                            </tr>
                            <tr>
                                <td>Фамилия:</td>
                                <td>Верушкин</td>
                            </tr>
                            <tr>
                                <td>Компания:</td>
                                <td>Senla</td>
                            </tr>
                            <tr>
                                <td>Должность:</td>
                                <td>Программист</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='profile__controls'>
                        <div className='profile__sort'>
                            <h3>Сортировать по:</h3>
                            <select onChange={handleSelect} defaultValue='id'>
                                <option value='id'>ID</option>
                                <option value='name'>Названию</option>
                                <option value='desc'>Описанию</option>
                            </select>
                        </div>

                        <div className='profile__filter'>
                            <h3>Найти технологии</h3>
                            <input
                                value={searchQuery}
                                placeholder='введите технологию, например, React'
                                onChange={(val) => setSearchQuery(val.target.value)}
                            />
                        </div>
                    </div>

                    <div className='works'>
                        {
                            cards.map(item => {
                                if (searchQuery.length) {
                                    // если в строке поиска tech что-то есть, то будет проверка на соответствие
                                    if (!item.tech.toLowerCase().includes(searchQuery.toLowerCase().trim())) {
                                        return null;
                                    }
                                }
                                return <Card
                                    key={item.id}
                                    name={item.name}
                                    desc={item.desc}
                                    tech={item.tech}
                                    link={item.link}
                                />
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main;
