import { NavLink } from 'react-router-dom'
import { API_URL } from '../../Const'
import s from './Product.module.scss'
import { ReactComponent as Like } from '/src/assets/hert.svg'
import { ColorList } from '../Colorlist/ColorList'

export const Product = ({id,price,description,pic,title,colors}) =>   
    (
    <article className={s.product}>
        <NavLink to={`product/${id}`} className={s.link}>
            <img className={s.img} src={`${API_URL}/${pic}`} alt={description} />
            <h3 className={s.title}>{title}</h3>            
        </NavLink>
        <div className={s.row}>
            <p className={s.price}>руб {price}</p>
            <button className={s.favorite}><Like /></button>
        </div> 
        <ColorList color={colors}/>    
    </article>
    )
