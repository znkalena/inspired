
import cn from 'classnames'
import { Container } from '../../Layout/Container/container.jsx'
import s from './Top.module.scss'
import logo from '../../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ReactComponent as LikeSVG } from '/src/assets/Heart.svg'
import { ReactComponent as SearhSVG } from '/src/assets/search.svg'
import { ReactComponent as CartSVG } from '/src/assets/cart.svg'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearch } from '../../../features/searchSlice.js'

export const Top =() =>{
    const {countItems} =useSelector(state => state.cart);
    const dispatch =useDispatch();

    const handleOpenSearch =() => {
        dispatch(toggleSearch());
    };

    return(
        <div className={s.top}>
        <Container className={s.topContainer}>
            <a className={cn(s.topLink,s.topPhone)} href ='tel:89304902620'>8 930 490 26 20</a>
            <NavLink className={s.topLogo} to='/'>
                <img src={logo} alt='логотип inspired'></img>
            </NavLink>
            <div className={s.topNavigation}>
                <ul className={s.topNavList}>
                    <li className={s.topItem}>
                        <button className={s.topLink} onClick={handleOpenSearch}>
                            <SearhSVG />                           
                        </button>
                    </li>
                    <li className={s.topItem}>
                        <NavLink to='/cart' className={s.topLink}>
                            <CartSVG />
                            <span className={s.topLinkCount}>{countItems}</span>
                        </NavLink>
                    </li>
                    <li className={s.topItem}>
                        <NavLink to='/favorite' className={classNames(s.topLink,s.toplike)}>
                            <LikeSVG />
                        </NavLink>
                    </li>    
                </ul>
            </div>
        </Container>
        </div>
    )   
    }
    