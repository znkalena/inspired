
import cn from 'classnames'
import { Container } from '../../Layout/Container/container.jsx'
import style from './Top.module.scss'
import logo from '../../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ReactComponent as LikeSVG } from '/src/assets/Heart.svg'
import { ReactComponent as SearthSVG } from '/src/assets/search.svg'
import { ReactComponent as CartSVG } from '/src/assets/cart.svg'
import classNames from 'classnames'

export const Top =() =>(
    <div className={style.top}>
    <Container className={style.topContainer}>
        <a className={cn(style.topLink,style.topPhone)} href ='tel:89304902620'>8 930 490 26 20</a>
        <NavLink className={style.topLogo} to='/'>
            <img src={logo} alt='логотип inspired'></img>
        </NavLink>
        <div className={style.topNavigation}>
            <ul className={style.topNavList}>
                <li className={style.topItem}>
                    <button className={style.topLink}>
                        <SearthSVG />
                    </button>
                </li>
                <li className={style.topItem}>
                    <NavLink to='/cart' className={style.topLink}>
                        <CartSVG />
                    </NavLink>
                </li>
                <li className={style.topItem}>
                    <NavLink to='/favorite' className={classNames(style.topLink,style.toplike)}>
                        <LikeSVG />
                    </NavLink>
                </li>    
            </ul>
        </div>
    </Container>
    </div>
)