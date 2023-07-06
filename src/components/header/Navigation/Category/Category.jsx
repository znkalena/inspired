import { NavLink } from 'react-router-dom';
import s from './Category.module.scss'
import classNames from 'classnames';
import { useSelector } from 'react-redux';


export const Category = ({list}) =>{
    const gender = useSelector(state => state.navigation.activeGender);
    const listGender = list.find(item => item.link === gender);
    
return (
<ul className={s.category}>
    {listGender.categories.map(category => (
    <li key={category.link}>
        <NavLink className={({isActive}) => classNames(s.link, isActive && s.linkActive)}
            to={`${gender}/${category.link}`}>{category.title}
        </NavLink>
    </li>
))
}
</ul>
)}