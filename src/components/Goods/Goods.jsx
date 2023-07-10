import { useSelector } from "react-redux";
import s from './Goods.module.scss'
import { Container } from "../Layout/Container/container";
import { Product } from "../Product/Product";

export const Goods = ({category}) => {
    const {goodsList} = useSelector(state => state.goods);
    const {activeGender,categories} =useSelector(state =>state.navigation);

    const title = category
    ? categories[activeGender]?.list
    .find(item => item.slug===category)
    .title
    :'Новинки'
    return (
        <section className={s.goods}>
            <Container>
            <h2 className={s.title}>{title}</h2>
                <ul className={s.list}>
                {goodsList.map(good =>
                    <li key={good.id} >
                        <Product  {...good}  />
                    </li>               
                )}
                </ul>
            </Container>
        </section>

    )
}

