import React, {useRef, useState} from 'react';
import style from './NavBar.module.scss';

function NavBar(props) {

    const barRef = useRef(null);
    const [barIsOpen, setBarIsOpen] = useState(false);

    const barHandler = () => {

        if (barIsOpen) {
            barRef.current.style.width = '0';
            barRef.current.style.height = '0';
            barRef.current.style.marginLeft = '-100px';
        } else {
            barRef.current.style.width = '300px';
            barRef.current.style.height = '400px';
            barRef.current.style.marginLeft = '0';
        }
        setBarIsOpen(!barIsOpen);
    }

    return (
        <>
            <div
                className={style.nav__burger}
                onClick={barHandler}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div
                className={style.nav__table}
                ref={barRef}
            >
                <div className={style.content}>
                    <p className={style.logo}>portfolio</p>

                    <nav>
                        <a href="#">На главную</a>
                        <hr/>
                        <a href="#">Github Repo</a>
                        <a href="#">The Impulse</a>
                    </nav>
                </div>
            </div>

            {props.children}
        </>
    )
}

export default NavBar;