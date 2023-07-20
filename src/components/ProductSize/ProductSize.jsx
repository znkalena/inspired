import s from './ProductSize.module.scss'

export const ProductSize = ({size,selectedSize,handleSizeChange}) =>(
        <div className={s.size}>
            <p className={s.title}>Размер</p>
            <div className={s.list}>
            {size?.map(size =>(               
                    <label className={s.size} key={size}>
                    <input 
                        className={s.input}
                        type='radio'
                        name='size'
                        value={size}
                        checked={selectedSize ===size}
                        onChange ={handleSizeChange}
                    />
                    <span className={s.check}>{size}</span>
                    </label>               
            ))}
            </div>
        </div>       
    )

