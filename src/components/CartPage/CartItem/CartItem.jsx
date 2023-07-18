import s from './CartItem.module.scss'

export const CartItem = ({id}) =>{
    return(
        <div className={s.item}>{id}</div>
    )
}