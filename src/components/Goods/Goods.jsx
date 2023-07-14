import { useDispatch, useSelector } from "react-redux";
import s from './Goods.module.scss'
import { Container } from "../Layout/Container/container";
import {Product} from '../Product/Product'
import { Pagination } from "../Pagination/Pagination";
import { usePageFromSearchParams } from "../../Hooks/usePageFromSearchParams";
import { fetchCategory } from "../../features/goodsSlice";
import { useEffect } from "react";

export const Goods = ({title}) => {
    const {goodsList} = useSelector(state => state.goods);
    const dispatch = useDispatch();
    const pageURL =usePageFromSearchParams(dispatch);    
    
    useEffect(() => {
        if(goodsList){
            const param = {list:goodsList};
            if(pageURL){
                param.page =pageURL;
            }
            dispatch(fetchCategory(param))   
        }
    
    },[dispatch,pageURL,goodsList])
        
    return (
        <section className={s.goods}>
            <Container>
            <h2 className={s.title}>{title ?? 'Новинки'}</h2>
                <ul className={s.list}>
                {goodsList.map((item) =>
                    <li key={item.id} >
                        <Product {...item}  />
                    </li>               
                )}
                </ul>
                <Pagination />              
            </Container>
        </section>
    )
}

