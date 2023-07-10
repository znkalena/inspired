import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Main } from "../Layout/Main/Main";
import { Header } from "../header/Header";



export const Root = () =>(
    <>
        <Header />
        <Main>
            <Outlet />
        </Main> 
        <Footer  />
    </>
)