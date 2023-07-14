import { useSelector } from "react-redux";
import { ReactComponent as LikeSVG } from "../../assets/Heart.svg"
import s from './btnLikeModule.scss'
import { addToFavorite, removeFromFavorite } from "../../features/favoritesSlice";
import classNames from "classnames";

export const BtnLike =({id}) =>{
    const dispatch =dispatch();
    const isFavorite =useSelector(state => state.favorites.includes(id));

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