import { useSelector } from "react-redux";
import s from './Goods.module.scss'
import { Container } from "../Layout/Container/container";
import {Product} from '../Product/Product'
import { Pagination } from "../Pagination/Pagination";
import { Preloader } from "../Preloader/preloader";


export const Goods = ({title}) => {
    const {goodsList,totalCount,status} = useSelector(state => state.goods);    
        
    return (
        <section className={s.goods}>
            <Container>
            <h2 className={s.title}>
            {title ?? 'Новинки'}
            {totalCount && totalCount>0 ? <sub>&nbsp;({totalCount})</sub> : ''}
            </h2>
            {status === 'loading'? (
                <Preloader />
                ):(<>
                    <ul className={s.list}>
                {goodsList?.map((item) =>
                    <li key={item.id} >
                        <Product {...item}  />
                    </li>               
                )}
                </ul>
                <Pagination />
                </>  )}                           
            </Container>
        </section>
    )
}

