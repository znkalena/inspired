import { NavLink } from 'react-router-dom';
import s from './Category.module.scss'
import classNames from 'classnames';
const list=[
    {link:'bras',title:'Бюстгальтеры'},
    {link:'panties',title:'Трусы'},
    {link:'socks',title:'Носки'},
    {link:'bathrobes',title:'Халаты'},
    {link:'thermal',title:'Термобелье'},
    {link:'pigamas',title:'Пижамы'}
]

export const Category = () => (
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