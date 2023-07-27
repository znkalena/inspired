import s from './SearchPage.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { useEffect } from "react";
import { fetchAll} from "../../features/goodsSlice";
import { useSearchParams} from 'react-router-dom';


export const SearchPage =() => {
const dispatch = useDispatch();
let [searchParams] =useSearchParams()
const {goodsList} = useSelector(state =>state.goods);

useEffect(() => {
    const search = searchParams.get('q');
    const params = {search};
    dispatch(fetchAll(params))
},[searchParams,dispatch]);
    return(
        goodsList.length ?
        <Goods title='Поиск' />
        :
        <h3 className={s.empty}>нет ничего по запросу</h3>
    )   
}