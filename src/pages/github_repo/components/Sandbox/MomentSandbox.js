import React, {useEffect, useState} from 'react';
import moment from "moment";
import Sandbox from "./Sandbox";

const MomentSandbox = () => {

    const [momentList, setMomentList] = useState([]);

    useEffect(() => {

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
        <Sandbox
            name='Moment'
            list={momentList}
            showOther={false}
        />
    );
};

export default MomentSandbox;