import React from "react";
import p from './Header.module.css';
import logo from '../../images/image2.svg';

const Page = (prop) => {
    return (
        <p className={p.page}>{prop.name}</p>
    )
}

const Header = () => {
    return (
        <div className={p.top}>
            <img src={logo} className={p.logo}/>
            <div className={p.pages}>
                <Page name="Главная"/>
                <Page name="Меню"/>
                <Page name="Афиша"/>
                <Page name="Сотрудничество"/>
                <Page name="Галерея"/>
                <Page name="Новости"/>
            </div>
            <button className={p.button}>
                <p className={p.textbutton}>БРОНИРОВАНИЕ</p>
            </button>
        </div>
    )
}

export default Header;