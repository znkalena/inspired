import { useEffect, useState } from 'react'
import { Container } from '../Layout/Container/container'
import s from './ProductPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../features/productSlice'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../Const'
import classNames from 'classnames'
import { ColorList } from '../Colorlist/ColorList'
import { ReactComponent as Like } from '../../assets/hert.svg'
import { Count } from '../Count/Count'
import { ProductSize } from '../ProductSize/ProductSize'


export const ProductPage =() => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {product} = useSelector(state => state.product);
    const [count,setCount] = useState(1);
    const [selectedColor,setSelectedColor] = useState('');
    const [selectedSize,setSelectedSize] =useState('');
    
    const handleIncrement = () => {
        setCount((prevCount) => prevCount++);
        }
    const handleDecrement = () => {
        if(count>1){
            setCount((prevCount) => prevCount--);
        }        
    };

    const handleSizeChange = e =>{
        setSelectedSize(e.target.value)
    }

    const handleColorChange = e => {
        setSelectedColor(e.target.value);
    };

useEffect(() => {
    dispatch(fetchProduct(id))
},[dispatch,id]);

    return (
        <section className={s.card}>
            <Container className={s.conteiner}>
                <img src={`${API_URL}/${product.pic}`} alt={`${product.title} ${product.description}`} />
                <form className={s.content}>
                    <h2 className={s.title}>{product.title}</h2>
                    <p className={s.price}>{product.price}</p>
                    <div className={s.vendorCode}>
                        <span className={s.subtitle}>Артикул</span>
                        <span className={s.id}>{product.id}</span>
                    </div>
                    <div className ={s.color}>
                        <p className ={classNames(s.subtitle,s.colorTitle)}>Цвет</p>
                        <ColorList colors ={product.colors} 
                        selectedColor ={selectedColor}
                        handleColorChange ={handleColorChange}
                        />
                    </div>                
                        <ProductSize 
                    sizes ={product.size}
                    selectedSize ={selectedSize}
                    handleSizeChange ={handleSizeChange}
                    />                   
                    <div className={product.description}>
                        <p className={classNames(s.subtitle,s.descriptionTitle)}>Описание</p>
                        <p className={s.descriptionText}>{product.description}</p>
                    </div>
                    <div className={s.control}>
                        <Count
                        count={count}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        />
                        <button className={s.addCart} type='submit'>В корзину</button>
                        <button className={s.favorite} type='button'><Like /></button>

                    </div>
                </form>
            </Container>
        </section>
    )
    };
    
