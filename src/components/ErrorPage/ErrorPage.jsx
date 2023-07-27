import {useLocation, useNavigate, useRouteError} from 'react-router-dom'
import s from './ErrorPage.module.scss'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchColors } from '../../features/colorSlice';
import { fetchNavigation } from '../../features/navigationSlice';

export const ErrorPage =() =>{
    const routeError = useRouteError();
    const {status} =useSelector(state =>state.statusServer);
    const location =useLocation();
    const navigate =useNavigate();
    const dispatch =useDispatch();
    const timerIdRef =useRef(null);

    useEffect(() => {
    if(status && location.pathname ==='/404'){
        navigate('/');        }
    },[navigate,status,location]);

    useEffect(() => {
        if(!status && location.pathname ==='/404'){
            clearInterval(timerIdRef.current);
            timerIdRef.current =setInterval(() =>{
                dispatch(fetchColors());
                dispatch(fetchNavigation());
            },3000)       
        }
        return () =>{
            clearInterval(timerIdRef.current)
        }
        },[dispatch,status,location]);

    return(
    <div className={s.error}>
    <h2 className={s.title}>Произошла ошибка 404 попробуйте зайти позже</h2>
    <p className={s.message}>{routeError ?.message || 'unknown mistake'}</p>
    </div>
)}