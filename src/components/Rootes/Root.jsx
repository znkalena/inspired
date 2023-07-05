import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Main } from "../Layout/Main/Main";
import { Header } from "../header/Header";

const list = [
    {
    link:'women',
    title :'Женщины',
    categories:[
        {link:"bras",title:"Бюстгальтеры"},
        {link:"panties",title:"Трусы"},
        {link:"socks",title:"Носки"},
        {link:"bathrobes",title:"Халаты"},
        {link:"thermal",title:"Термобелье"},
        {link:"pigamas",title:"Пижамы"},
    ]},
    {
    link:'men',
    title :'Мужчины',
    categories:[        
        {link:"panties",title:"Трусы"},
        {link:"socks",title:"Носки"},
        {link:"bathrobes",title:"Халаты"},
        {link:"thermal",title:"Термобелье"}        
    ]}
]

export const Root = () =>(
    <>
        <Header list={list} />
        <Main>
            <Outlet />
        </Main> 
        <Footer list={list} />
    </>
)