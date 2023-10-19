import React from "react";
import s from './Info.module.css';

const Info = () => {
    return (
        <div className={s.main}>
            <div className={s.info}>
                <p className={s.textinfo}>TOP "MANHATTAN" PLACE</p>
            </div> 
            <p className={s.tryhard}>КОНТАКТЫ</p>
        </div>
    )
}

export default Info;