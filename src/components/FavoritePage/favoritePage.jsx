import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice";
import { usePageFromSearchParams } from "../../Hooks/usePageFromSearchParams";

export const FavoritePage =() => {
const dispatch = useDispatch();

const page = usePageFromSearchParams(dispatch);


const favorites = useSelector(state =>state.favorites);

useEffect(() => {
    if(favorites){
        const param = {list:favorites};
        if(page){
            param.page =page;
        }
        dispatch(fetchCategory(param))   
    }

},[favorites,dispatch,page])

    return(
        <Goods title='Избранное' />
    )   
}