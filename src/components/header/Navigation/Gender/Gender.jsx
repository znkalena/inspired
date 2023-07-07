import { NavLink} from 'react-router-dom'
import s from './Gender.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'


export const Gender = ({list}) => {
    const gender = useSelector(state => state.navigation);
    return (
        <ul className={s.gender}>
{list.map(item =>(
<li key={item.link} className={s.item}>
    <NavLink className={({isActive}) =>
        classNames(s.link, (isActive  || gender.activeGender === item.link) && s.linkActive)}
        to={item.link}> {item.title}
    </NavLink>
</li>
))
}
    </ul> 
    )
}