import s from './ProductSize.module.scss'

export const ProductSize = ({ 
    sizes,                   
    selectedSize,
    handleSizeChange,
    }) =>(
        <div className={s.size}>
            <p className={s.title}>Размер</p>
            <div className={s.list}>
            {sizes?.map(size =>{               
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
            })}
            </div>
        </div>       
    )

