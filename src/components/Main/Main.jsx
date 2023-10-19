import React from "react";
import s from './Main.module.css';
import i1 from '../../images/1.svg';
import i2 from '../../images/2.svg';
import i3 from '../../images/3.svg';
import i4 from '../../images/4.svg';
import Menu from "./Menu/Menu";
import Events from "./Events/Events";
import Tourists from "./Tourists/Tourists";
import Party from "./Party/Party";
import Info from "./Info/Info";

const Main = () => {
    return (
        <>
        <Events />
        <Menu />
        <Tourists />
        <Party />
        <Info />
        </>
    )
}

export default Main