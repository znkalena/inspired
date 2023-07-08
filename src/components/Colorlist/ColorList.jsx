import { useSelector } from "react-redux"
import s from './ColorList.module.scss'
import { Color } from "./Color";

export const ColorList = (color) => {
    const {colorList} = useSelector(state => state.color);   
    console.log(color)
    return(
        <ul className={s.colorList}>{
        color.forEach(color =>{
            const sameColor = colorList.find(item =>item.id === color);
            color.code =sameColor.code;
            color.id =sameColor.id;
            return<Color key={color.id} colore={color.code} />
        })        
        }                       
        </ul>
    )
}