
import { Container } from "../Layout/Container/container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../../features/goodsSlice";
import s from './MainPage.module.scss'
import { Product } from "../Product/Product";


export const MainPage =({gender ='women'}) =>{
    
    const dispatch = useDispatch();
    const {goodsList} = useSelector(state => state.goods)
    
    useEffect(() => {
        dispatch(fetchGoods(gender))  
    },[gender,dispatch])

    return(
        <section className={s.goods}>
            <Container>
            <h2 className={s.title}>новинки</h2>
                <ul className={s.list}>
                {goodsList.map(good =>
                    <li key={good.id} >
                        <Product  {...good}  />
                    </li>               
                )}
                </ul>
            </Container>
        </section>
)};