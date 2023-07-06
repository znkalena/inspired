import { NavLink, useLocation } from 'react-router-dom';
import s from './Category.module.scss'
import classNames from 'classnames';


export const Category = ({list}) =>{
    const location = useLocation();
    if(location.pathname==='women'){
    const listWomen =list[0];
<ul className={s.category}>
{listWomen.categories.map(category =>(
<li key={category.link}>
    <NavLink className={({isActive}) => classNames(s.link,isActive && s.linkActive)}
        to={category.link}> {category.title}</NavLink>
</li>
))
}
    </ul> 
    }else{
        const listMen =list[1];
        <ul className={s.category}>
        {listMen.categories.map(category =>(
        <li key={category.link}>
            <NavLink className={({isActive}) => classNames(s.link,isActive && s.linkActive)}
                to={category.link}> {category.title}</NavLink>
        </li>
        ))
        }
            </ul>    
    }
    
};