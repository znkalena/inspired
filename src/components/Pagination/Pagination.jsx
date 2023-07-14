import { NavLink, useLocation } from 'react-router-dom'
import s from './Pagintaion.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { setPage } from '../../features/goodsSlice'; 

export const Pagination = () => {
    const pathname = useLocation().pathname;
    const {page,pages} =  useSelector(state => state.goods);
    const dispatch = useDispatch();

    const handleChangePage =(newPage =>{
        dispatch(setPage(newPage))
    })
    const handlePrevPage =() => {
            if(page>1){
            handleChangePage(page-1);    
            }
    }
    const handleNextPage =() => {
            if(page <pages){
                handleChangePage(page+1)
            }
    }

    const renderPaginationItems =() =>{
        const paginationItems =[];
        let startPage = Math.max(1,page-1);
        let endPage = Math.min(startPage+2,pages)
    
        for(let i =startPage;i<= endPage;i++){
            if(i=== endPage){
                while(i <= endPage-2){
                    paginationItems.push(
                        <li key={i}>
                            <NavLink 
                            to={`${pathname}?page =${i}`} 
                            className={classNames(s.link,i=== +page ?? s.linkActive)}
                            onClick={() => handleChangePage(i)}
                            >{i}
                            </NavLink> 
                        </li>                        
                    )
                    i=i-1
                    return paginationItems;
                }                
            }else{
                paginationItems.push(
                    <li key={i}>
                        <NavLink 
                        to={`${pathname}?page =${i}`} 
                        className={classNames(s.link,i=== +page ?? s.linkActive)}
                        onClick={() => handleChangePage(i)}
                        >{i}
                        </NavLink> 
                    </li>
                )
                return paginationItems;
            }
            
        }
    };

return(
<div className={s.pagination}>
<button 
className={s.arrow} 
onClick={handlePrevPage}
disabled={page <= 2}
style={pages==0 ? {display:'none'} : {display:'block'}}
>
&lt;
</button>
<ul className={s.list}>{renderPaginationItems}</ul> 
<button 
className={s.arrow} 
onClick={handleNextPage}
disabled={page >= pages-1 || pages <= 3}
style={pages==0 ? {display:'none'} : {display:'block'}}
>
&gt;
</button>
</div>
)
}