import React from "react";
import s from './Tourists.module.css';
import tourists from '../../../images/tourists.svg';

const Side = (prop) => {
    return (
        <>
        <div className={s.topdiv}>
                    <p className={s.toptext}>{prop.toptext}</p>
                </div>
                <p className={s.topic}>{prop.topic}</p>
                <p className={s.description}>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam.<br /><br /> Mattis egestas suspendisse convallis eu arcu et aliquet. Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi.<br /><br /> Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris. Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
                <button className={s.bottomdiv}>
                    <p className={s.bottomtext}>ПОДРОБНЕЕ</p>
                </button>
        </>
    )
}

const Tourists = () => {
    return (
        <div className={s.main}>
            <div className={s.left}>
                <Side toptext="TOP “MANHATTAN” MENU" topic="БАНКЕТЫ"/>
            </div>
            <div className={s.centre}>
                <img src={tourists} />
            </div>
            <div className={s.right}>
                <Side toptext="TOP “MANHATTAN” TOURISTS" topic="ТУРИСТЫ"/>
            </div>
        </div>
    )
}

export default Tourists;