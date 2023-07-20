import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LikeSVG } from "../../assets/Heart.svg"
import s from './btnLike.module.scss'
import { addToFavorite, removeFromFavorite } from "../../features/favoritesSlice";
import classNames from "classnames";

export const BtnLike =({id}) =>{    
    const isFavorite =useSelector(state => state.favorites.includes(id));
    const dispatch =useDispatch();

    const handleToggleFavorite =() => {
        if(isFavorite){
            dispatch(removeFromFavorite({id}));            
        }else{
            dispatch(addToFavorite({id}));
        }
    }
    return(
        <button 
        className={isFavorite ? classNames(s.like,s.active) : s.like}
        aria-label="Добавить в избранное"
        type="button"
        onClick={handleToggleFavorite}
        >
            <LikeSVG />
        </button>
    )
}