import React, {Component} from 'react';
import './Main.scss';
import enter from './img/enter.png';
import photo from './img/profile/T24TEY8fPSs.jpg';
import Card from "./components/Card/Card";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [
            {
                name: 'Github Repo',
                desc: 'Приложение для загрузки репозиториев пользователей с Github.',
                tech: 'React, Render-props, hoc, MomentJS, Axios',
                link: '/github-repo',
            },
            {
                name: 'The Impulse Demo',
                desc: 'Небольшая браузерная логическая игра, в которой нужно перемещаться между квадратами в соответствии с цветовыми схемами.',
                tech: 'React, Redux, Middleware, Redux Thunk, TypeScript',
                link: '/the-impulse'
            }
        ]}
    }

    render() {
        return(
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
                        <div className='works'>
                            {
                                this.state.cards.map((item, index) => {
                                    return <Card
                                        key={index}
                                        name={item.name}
                                        desc={item.desc}
                                        tech={item.tech}
                                        link={item.link}/>
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Main;
