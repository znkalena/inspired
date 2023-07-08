import { useSelector } from "react-redux"
import s from './ColorList.module.scss'
import { Color } from "./Color";

export const ColorList = (colors) => {
    const {colorList} = useSelector(state => state.color);   
    
    return(
        <ul className={s.colorList}>
            {
                colors.map(color =>{
                    const sameColor =colorList.find(item =>color===item.id);
                    return <Color key={sameColor.id} color ={sameColor?.code}  />
                })
            }            
        </ul>
    )
}