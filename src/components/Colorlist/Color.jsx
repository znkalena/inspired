
import classNames from 'classnames'
import s from './Color.module.scss'

export const Color =(style,check) => {
    return(
        <li className={classNames(s.color,check && s.colorCheck)} style={style}></li>
    )
}