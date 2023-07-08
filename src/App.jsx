import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import { Root } from './components/Rootes/Root.jsx';
import { MainPage } from './components/MainPage/MainPage.jsx';
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from './features/navigationSlice.js';
import { fetchColors } from './features/colorSlice.js';


const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element= {<MainPage />}/>
            <Route path='women' element= {<MainPage gender='women' />}/>
            <Route path='men' element= {<MainPage gender='men'/>}/>
            <Route path='kids' element= {<MainPage gender='kids'/>}/>
            <Route path='women/:category' element= {<MainPage gender='women' />}/>            
            <Route path='men/:category' element= {<MainPage gender='men' />}/>
            <Route path='kids/:category' element= {<MainPage gender='kids' />}/>
            <Route path='*' element= {<ErrorPage />}/>
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



