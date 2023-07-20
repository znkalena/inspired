import { NavLink } from 'react-router-dom'
import { API_URL } from '../../Const'
import s from './Product.module.scss'
import { ColorList } from '../Colorlist/ColorList'
import { BtnLike } from '../BtnLike/BtnLike'

export const Product = ({id,price,pic,title,colors,description}) =>      
    (
    <article className={s.product}>
        <NavLink to={`/product/${id}`} className={s.link}>
            <img className={s.img} src={`${API_URL}/${pic}`} alt={`${title}${description}`} />
            <h3 className={s.title}>{title}</h3>            
        </NavLink>
        <div className={s.row}>
            <p className={s.price}>руб {price}</p>
            <BtnLike id={id} className={s.favorite} />
        </div> 
        <ColorList colors={colors}/>    
    </article>
    );
    