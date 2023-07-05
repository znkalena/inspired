import { NavLink } from 'react-router-dom';
import s from './Category.module.scss'
import classNames from 'classnames';


export const Category = ({list}) => (
    <ul className={s.category}>
{list.map(item =>(
<li key={item.link} className={s.link}>
    <NavLink className={({isActive}) => classNames(s.link,isActive && s.linkActive)}
        to={item.link}> {item.title}</NavLink>
</li>
))
}
    </ul> 
    );