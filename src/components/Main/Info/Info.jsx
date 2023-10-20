import React from "react";
import s from './Info.module.css';

const Elem = (prop) => {
    return (
        <>
        <li className={s.topic}>{prop.topic}</li>
        <li className={s.text}>{prop.text}</li>
        </>
    )
}

const Info = () => {
    return (
        <div className={s.main}>
            <div className={s.info}>
                <p className={s.textinfo}>TOP "MANHATTAN" PLACE</p>
            </div> 
            <p className={s.tryhard}>КОНТАКТЫ</p>
            <div className={s.centre}>
                <div className={s.left}>
                    <ul className={s.ul}>
                        <Elem topic="АДРЕС" text="Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)" />
                        <Elem topic="ТЕЛЕФОН" text="+7 (812) 713-1945" />
                        <Elem topic="РЕЖИМ РАБОТЫ" text="Ежедневно с 12:00 до 06:00" />
                        <hr />
                        <Elem topic="ДИРЕКТОР" text="Лидия Эмильевна, +7(921) 963-55-50" />
                        <Elem topic="АРТ-ДИРЕКТОР" text="Илиния Ионашко, +7(981) 989-43-30" />
                    </ul>
                </div>
                <div className={s.right}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.3920402424462!2d30.32710307699888!3d59.925636663147415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631aa6e3b3193%3A0xe7c54da95407a617!2z0L3QsNCx0LXRgNC10LbQvdCw0Y8g0YDQtdC60Lgg0KTQvtC90YLQsNC90LrQuCwgOTDQujEsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MTE4MA!5e0!3m2!1sru!2sby!4v1697798780894!5m2!1sru!2sby" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Info;