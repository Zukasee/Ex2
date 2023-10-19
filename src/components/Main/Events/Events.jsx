import React from "react";
import s from './Events.module.css';
import i1 from '../../../images/1.svg';
import i2 from '../../../images/2.svg';
import i3 from '../../../images/3.svg';
import i4 from '../../../images/4.svg'; 



const Events = () => {
    return (
        <div className={s.events}>
            <div className={s.left}>
                <div className={s.since}>
                    <p className={s.sincetext}>SINCE 1996</p>                    
                </div>
                <p className={s.true}>TRUE. FONTANKA. <br />UNDERGRAUND.</p>
            </div>
            <div className={s.right}>
                <div className={s.near}>
                    <p className={s.neartext}>БЛИЖАЙШИЕ</p>
                </div>
                <div className={s.soon}>
                    <p className={s.neartext}>СКОРО</p>
                </div>
                <div className={s.nearall}>
                    <div className={s.nearevent}><img src={i1} className={s.asd}/></div>
                    <div className={s.nearevent}><img src={i2} className={s.asd}/></div>
                    <div className={s.nearevent}><img src={i3} className={s.asd}/></div>
                    <div className={s.nearevent}><img src={i4} className={s.asd}/></div>
                </div>
            </div>
        </div>
    )
}

export default Events;