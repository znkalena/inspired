import s from './ProductSize.module.scss'

export const ProductSize = ({ 
    sizes,                   
    selectedSize,
    handleSizeChange,
    }) =>(
        <div className={s.size}>
            <p className={s.title}>Размер</p>
            <ul className={s.list}>
            {sizes.map(size =>{
                <li className={s.item} key={size}>{size}
                <input 
            className={s.input}
            type='radio'
            name='size'
            value={size?.title}
            checked={selectedSize ? selectedSize ===size?.title : check}
            onChange ={handleSizeChange}
            />
                </li>
            })}
            </ul>
        </div>       
    )

