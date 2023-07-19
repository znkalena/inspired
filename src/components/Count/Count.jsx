import classNames from 'classnames'
import s from './Count.module.scss'

export const Count = ({className,count,handleIncrement,handleDecrement}) =>{
        return (
        <div className={classNames(s.count,className)}>
            <button className={s.item} type='button' onClick={handleDecrement}>-</button>
            <span className={classNames(s.item,s.number)}>{count}</span>
            <button className={s.item} type='button' onClick={handleIncrement}>+</button>
        </div>
    )};

