import { useSelector } from "react-redux"
import s from './ColorList.module.scss'
import { Color } from "./Color";

export const ColorList = ({colors}) => {
    console.log(colors)
    const {colorList} = useSelector(state => state.color);   
    console.log(colorList)
    return(
        <ul className={s.colorList}>{
            colors.map((color,i) =>{
                const sameColor =colorList.find(item =>color ===item.id)
                return <Color key={i}  check={!i} style={{background:sameColor?.code}} />  
            })   
                    
        }                       
        </ul>
    )
}