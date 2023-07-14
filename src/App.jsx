import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import { Root } from './components/Rootes/Root.jsx';
import { MainPage } from './components/MainPage/MainPage.jsx';
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from './features/navigationSlice.js';
import { fetchColors } from './features/colorSlice.js';
import { ProductPage } from './components/ProductPage/productPage.jsx';
import { FavoritePage } from './components/FavoritePage/favoritePage.jsx';
import { CartPage } from './components/CartPage/cartPage.jsx';


const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element= {<MainPage />}/>
            <Route path="/favorite" element= {<FavoritePage />} />
            <Route path="/cart" element= {<CartPage />} />
            <Route path="/product/:id" element= {<ProductPage/>} />
            <Route path="/catalog/:gender/:category?" element= {<MainPage />}/>
            <Route path="*" element= {<ErrorPage />}/>
        </Route>
    )
)

export const App = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNavigation())
    },[dispatch]);
    
    useEffect(() => {
        dispatch(fetchColors())
    },[dispatch]);

    return <RouterProvider router ={router}></RouterProvider> 
    
}



