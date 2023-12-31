import { useSelector } from "react-redux"
import s from './ColorList.module.scss'
import { Color } from "./Color";
import { ColorLabel } from "./ColorLabel";


export const ColorList = ({colors,selectedColor,handleColorChange}) => {    
    const {colorList} = useSelector(state => state.color);   
    return handleColorChange ? (
    <div className={s.colorList}>
        {colors?.map((id,i) =>{
            const color =colorList.find(color => color.id === id);
            
            return <ColorLabel  
            key={id}  
            check={!i} 
            color={color}
            selectedColor= {selectedColor}
            handleColorChange ={handleColorChange} />
        })}
    </div>
    ) :(
        <ul className={s.colorList}>
        {colors?.map((id,i) =>{
                const color =colorList.find(color => color.id === id);
                return <Color  key={id}  check={!i} color={color?.code} />  
            })                     
        }                       
        </ul>
    )
}