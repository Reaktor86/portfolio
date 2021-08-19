import React, {useEffect} from 'react';
import style from './QuizStat.module.scss';

function QuizStat(props) {

    const styleStat = [style.QuizStat];

    useEffect(() => {
        if (props.gameState) {

            // код запускается в конце игры
            styleStat.push(style.over);

            const row = {
                name: props.name,
                score: props.score,
            }

            console.log('игра окончена! ', row);
            props.addRowToRecordTable(row);

        } else {

            // код запускается в начале игры
            styleStat.push(style.menu);
        }
    }, [props.gameState])

    return (
        <div className={styleStat.join(' ')}>
            <h2>Таблица рекордов</h2>
            <table>
                <thead>
                <tr>
                    <th>Место</th>
                    <th>Имя</th>
                    <th>Очки</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.recordTable.length === 0 ?
                        <tr>
                            <td className={style.empty} colSpan='3'>ПУСТО</td>
                        </tr>
                        :
                        props.recordTable.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.score}</td>
                            </tr>
                        })
                }
                </tbody>

            </table>
        </div>
    )
}

export default QuizStat;

/* TODO: закончил здесь

Перевести компонент на styled
Quiz.js тоже перевести
Разобраться с QuizButton - она должна иметь дефолтные цвета и менять цвет через пропсы
 */