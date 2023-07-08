
import s from './Color.module.scss'

export const Color =({color,key}) => {
    return(
        <li className={s.color} >{color}{key}</li>
    )

}