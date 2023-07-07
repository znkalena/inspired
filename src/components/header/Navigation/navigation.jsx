import { useDispatch, useSelector } from "react-redux";
import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";
import {Container} from '/src/components/Layout/Container/Container'
import { useEffect } from "react";
import { setActiveGender } from "../../../features/navigationSlice.js";

export const Navigation =({list}) =>{
        const dispatch = useDispatch();       
        const gender = useSelector(state => state.navigation);
        console.log(gender)
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
