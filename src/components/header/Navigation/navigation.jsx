import { useDispatch } from "react-redux";
import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";
import {Container} from '/src/components/Layout/Container/Container'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice.js";

export const Navigation =({list}) =>{
        const dispatch = useDispatch();
        const location = useLocation();
        const gender = location.pathname.split('/')[1] || 'women';  
        
        useEffect(() =>{            
            dispatch(setActiveGender(gender));
        },[gender,dispatch])
        return(
            <nav>
        <Container>
            <Gender list={list} />
            <Category list={list} />
        </Container>
        </nav>
        )
        }
