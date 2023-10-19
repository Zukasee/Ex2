import React from "react";
import s from './Menu.module.css';
import dish1 from '../../../images/dish1.svg';
import dish2 from '../../../images/dish2.svg';
import dish3 from '../../../images/dish3.svg';
import dish4 from '../../../images/dish4.svg';
import dish5 from '../../../images/dish5.svg';
import dish6 from '../../../images/dish6.svg';
import dish7 from '../../../images/dish7.svg';
import dish8 from '../../../images/dish8.svg';

let menu = [
    {id:  1,name: "AMET DONEC.", src: dish1, coast: "550 р",weight: "200 гр",description: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit."},
    {id:  3,name: "AMET DONEC.", src: dish2, coast: "540 р",weight: "300 гр",description: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit."},
    {id:  4,name: "AMET DONEC.", src: dish3, coast: "510 р",weight: "500 гр",description: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit."},
    {id:  2,name: "AMET DONEC.", src: dish4, coast: "530 р",weight: "400 гр",description: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit."},
    {id:  5,name: "AMET DONEC.", src: dish5, coast: "550 р",weight: "500 гр",description: "Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis."},
    {id:  6,name: "AMET DONEC.", src: dish6, coast: "590 р",weight: "350 гр",description: "Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis."},
    {id:  7,name: "AMET DONEC.", src: dish7, coast: "550 р",weight: "100 гр",description: "Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis."},
    {id:  8,name: "AMET DONEC.", src: dish8, coast: "550 р",weight: "200 гр",description: "Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis."}
]

const MenuElement = ({elem}) => {
    return (
        <div className={s.dish}>               
            <div className={s.img} >
                <img src={elem.src} />
            </div>                
            <div className={s.textmenu}>
                <div className={s.sloy1}>
                    <p className={s.namedish}>{elem.name}</p>
                    <div className={s.coast}>
                        {elem.coast}   
                    </div>
                </div>
                <p className={s.weight}>{elem.weight}</p>
                <p className={s.description}>{elem.description}</p>
            </div>    
        </div>
    )
}


const Menu = (prop) => {
    
    // const menuElements = menu.map( elem => <MenuElement id={elem.id} name={elem.name} src={elem.src} coast={elem.coast} weight={elem.weight} description={elem.description} />)

    return (
        <div className={s.menu}>
            <div className={s.topmenu}>
                <p className={s.topmenutext}>TOP "MANHATTAN" MENU</p>
            </div>  
            <p className={s.kitchen}>КУХНЯ</p>
            <div className={s.deeshs}>
              {menu.map( elem => <MenuElement elem={elem}/>)}
            </div>
            <button className={s.allmenu}>ВСЕ МЕНЮ</button>
        </div>
    )
}

export default Menu;