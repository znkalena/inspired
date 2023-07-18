import { NavLink, useLocation } from 'react-router-dom'
import s from './Pagintaion.module.scss'
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export const Pagination = () => {
    const [pagePagination,setPagePagination] =useState('');    
    const pathname = useLocation().pathname;
    const {page,pages} =  useSelector(state => state.goods);     

    useEffect(() => {
        setPagePagination(page)
    },[page,setPagePagination]);

    const handleChangePage =(newPage =>{
        setPagePagination(newPage)
    });

    const handlePrevPage =() => {
            if(pagePagination>1){
            handleChangePage(pagePagination-1);    
            }
    };
    const handleNextPage =() => {
            if(pagePagination <pages){
                handleChangePage(pagePagination+1)
            }
    };

    const renderPaginationItems =() =>{
        const paginationItems =[];
        let startPage = 0;

        if(pagePagination <= pages -1){
            startPage = Math.max(1,pagePagination-1);
        }else{
            startPage = Math.max(1,pagePagination-2);
        }        
        let endPage = Math.min(startPage+2,pages);
    
        for(let i =startPage;i<= endPage;i++){           
                    paginationItems.push(
                        <li key={i} className={s.item}>
                            <NavLink 
                            to={`${pathname}?page =${i}`} 
                            className={classNames(s.link,i=== pagePagination && s.linkActive)}
                            onClick={() => handleChangePage(i)}
                            >{i}
                            </NavLink> 
                        </li>                        
                    )                    
                    return paginationItems;
                }         
            }; 
return(
    pages>1 &&
<div className={s.pagination}>
<button 
className={s.arrow} 
onClick={handlePrevPage}
disabled={pagePagination <= 2}>
&lt;
</button>
<ul className={s.list}>{renderPaginationItems()}</ul> 
<button 
className={s.arrow} 
onClick={handleNextPage}
disabled={pagePagination >= pages-1 || pages <= 3}
>
&gt;
</button>
</div>
)
};
