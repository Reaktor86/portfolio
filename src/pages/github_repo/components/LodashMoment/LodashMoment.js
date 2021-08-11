import React, {useEffect, useState} from 'react';
import moment from "moment";
import 'moment/locale/ru';
import style from './LodashMoment.module.scss';
import _ from "lodash";

const LodashMoment = () => {
    
    const [lodashList, setLodashList] = useState([]);
    const [momentList, setMomentList] = useState([]);

    useEffect(() => {
        
        // LODASH

        const _ = require('lodash');
        let ar = [1,2,3,56,73,90,42];
        let ar2 = [1,2,null,56,undefined,90,false, ''];
        
        setLodashList([
            // числа
            'Сравнение чисел: ' + _.isEqual(1, 2),
            'Суммировать два числа: ' + _.add(6,3),
            'Вычесть два числа: ' + _.subtract(6,3),
            'Умножить два числа: ' + _.multiply(6,3),
            'Разделить два числа: ' + _.divide(6,3),
            'Находится ли 4 в диапазоне от 3 до 10? ' + _.inRange(4, 3,10),
            _.uniqueId('уникальный id_'),
            _.uniqueId('уникальный id_'),
            'Повторить один и тот же элемент: ' + _.repeat('снова ', 5),

            // массивы

            'Исходный массив ar: ' + ar.toString(),
            'Вернуть первый элемент массива: ' + _.first(ar),
            'Суммировать числа в массиве: ' + _.sum(ar),
            'Вернуть максимальное число: ' + _.max(ar),
            'Среднее арифметическое: ' + _.round(_.mean(ar), 2),
            'Найти индекс элемента 42: ' + _.indexOf(ar, 42),
            'Найти индекс элемента 42 по условию: ' + _.findIndex(ar, function (e){
                return e === 42;
            }),
            'Длина массива: ' + _.size(ar),
            'Слить в строку: ' + _.join(ar, ' '),
        ]);

        // Только в консоли

        console.log('Создать массив с числами от 0 до 10 c шагом 2: ', _.range(0, 11, 2));
        console.log('Поместить все слова в массив: ', _.words('Поместить все слова в массив'));
        console.log('Каждый элемент в новом массиве: ', _.chunk(ar));
        console.log('Исходный массив ar2: ', ar2);
        console.log('Только truthy-значения: ', _.compact(ar2));
        console.log('Удалить 1-й элемент: ', _.drop(ar2));
        console.log('Удалить с конца 3 элемента: ', _.dropRight(ar2, 3));
        console.log('Удалить элементы по условию, подряд слева: ', _.dropWhile(ar2, function(item) { return item < 3}));
        let fillArray = ['qw', 'wrfw'];
        console.log('Заменить элементы исходного массива чем-то другим: ', _.fill(fillArray, 1));
        console.log('Отфильтровать: ', _.filter(ar, function (e){
            return e > 3;
        }));
        console.log('Перемешать: ', _.shuffle(ar2));
        console.log('Удалить 1 и 2 без мутации: ', _.without(ar2, 1, 2));
        console.log('Удалить 1 и 2 навсегда: ', _.pull(ar2, 1, 2));
        console.log('Реверс: ', _.reverse(ar2));

        // коллекции

        let collect = [
            {id: 1, name: 'Oleg'},
            {id: 2, name: 'Ivan'},
            {id: 3, name: 'Kolya'},
            {id: 4, name: 'Irina'},
        ]
        console.log('Исходный массив: ', collect);
        console.log('Сортировать по id в обратном порядке: ', _.orderBy(collect, ['id'], ['desc']));
        console.log('forEach, удвоим каждое число id: ', _.forEach(collect, function (item) {
            if (_.isNumber(item.id)) {
                item.id *= 2
            }
        }));
        console.log('Отфильтровать по Oleg: ', _.filter(collect, {name: 'Oleg'}));
        console.log('Вернуть первое попавшееся имя на I: ', _.find(collect, function (item) {
            return _.startsWith(item.name, 'I');
        }));
        console.log('Объект с самым большим id: ', _.maxBy(collect, 'id'));
        console.log('Копирование объекта со всеми подуровнями: ', _.cloneDeep(collect));
        console.log('Добавить новый ключ в объект: ', _.assign({test: 5}, collect[0]));

        // разное в Lodash
        _.delay(() => {
            console.log('Задержка 2 сек');
        }, 2000)

        //MOMENT JS

        let time = moment().format('YYYY/MM/DD HH:mm:ss');
        let parse1 = moment('2021 08 11').format('Do MMMM YYYY');
        // указываем, что мы имели ввиду, вторым параметром
        let parse2 = moment('2021 08 10', 'YYYY DD MM').format('Do MMMM YYYY');
        let date = {
            years: 2020,
            days: 15,
            months: 5,
        }
        
        setMomentList([
            time,
            parse1,
            parse2,
            moment(date).format('Дата передана объектом: DD.MM.YYYY'),

            // геттеры
            'Вернуть год: ' + moment().year(),
            'Вернуть год, другой способ: ' + moment().get('year'),
            // сеттеры
            'Установить год: ' + moment().year(2015).format('YYYY MM DD'),
            'Установить месяц: ' + moment().set('M', 5).format('DD.MM.YYYY'),

            // манипуляции
            moment().add(3, 'days').format('Прибавлено 3 дня: DD.MM.YYYY'),
            moment().add(3, 'M').format('Прибавлено 3 месяца: DD.MM.YYYY'),
            moment().subtract(2, 'year').format('Минус 2 года: DD.MM.YYYY'),
            moment().startOf('w').format('Неделя началась: YYYY MM DD HH:mm:ss'),
            'С 2021.03.04 прошло: ' + moment('2021 03 04', 'YYYY MM DD').fromNow(),
            'С 2021.03.04 до 2021.03.05 12:45:00 прошло: ' + moment('2021 03 04', 'YYYY MM DD').from('2021 03 05 12:45:00'),
            'С 10 декабря 2020 прошло ' + moment().diff(moment('2020 12 10').format('YYYY MM DD'), 'hour') + ' часов',
        ]);
        
    }, [])

    return (
        <div className={style.container}>
            <h2>Lodash</h2>
            {
                lodashList.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
            <p className={style.other}>Другие возможности - см. консоль</p>
            <h2>Moment</h2>
            {
                momentList.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
            <p className={style.other}>Другие возможности - см. консоль</p>
        </div>
    );
};

export default LodashMoment;