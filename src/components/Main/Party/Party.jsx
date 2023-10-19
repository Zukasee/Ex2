import React from "react";
import s from './Party.module.css';
import bot from '../../../images/bot.svg';
import vk from '../../../images/vk.svg';
import telega from '../../../images/telega.svg';
import kostia from '../../../images/kostia.svg';
import david from '../../../images/David.svg';

const LeftElement = (prop) => {
    return (
        <div className={s.elem}>
            <p className={s.elemtext}>{prop.text}</p>
            <img src={bot} className={s.strelka}/>
        </div>
    )
}

const RightElement = (prop) => {
    return (
        <div className={s.techrider}>
            <img src={prop.src} className={s.imgrider}/>
            <p className={s.name}>{prop.name}<br />{prop.surname}</p>
            <div className={s.network}>
                <div className={s.net}>
                    <img src={vk} className={s.netimg}/>
                </div>
                <div className={s.net}>
                    <img src={telega} className={s.netimg}/>
                </div>
            </div>
        </div>
    )
} 

const Party = () => {
    return (
        <div className={s.main}> 
            <div className={s.party}>
                <p className={s.textparty}>TOP "MANHATTAN" PARTY</p>
            </div>
            <p className={s.tryhard}>ТЕХРАЙДЕР</p>
            <div className={s.centre}>
                <div className={s.mainleft}>
                    <div className={s.leftelem}>
                        <p className={s.elemtext}>LOUDSPEAKERS</p>
                        <img src={bot} className={s.strelka}/>
                        <ul className={s.ul}>
                            <li className={s.li}>Acoustic system BELL Top 600W x 2</li>
                            <li className={s.li}>Acoustic system BELL Top 600W x 2</li>
                            <li className={s.li}>Acoustic system BELL Top 600W x 2</li>
                            <li className={s.li}>Front monitor Yamaha SM12V 300w x 2</li>
                            <li className={s.li}>Backside monitor Dynacord 500W x 2</li>
                        </ul>
                    </div>
                    <LeftElement text="AMPLIFIER"/>
                    <LeftElement text="FOH"/>
                    <LeftElement text="BACKLINE"/>
                    <LeftElement text="MICROPHONE SET"/>
                    <LeftElement text="DJ EQUIPMENT"/>
                </div>
                <div className={s.mainright}>
                    <p className={s.righttext}>ЗВУКОРЕЖИССЕРЫ<br /> КЛУБА МАНХЭТТЕН</p>
                    <RightElement src={kostia} name="Изотов" surname="Константин"/>
                    <RightElement src={david} name="Давид" surname="Хозиев"/>
                </div>
            </div>
        </div>
    )
}

export default Party;