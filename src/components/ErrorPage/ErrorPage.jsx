import {useRouteError} from 'react-router-dom'

export const ErrorPage =() =>{
    const error = useRouteError()
    return(
    <div>
    <h2>404 error</h2>
    <p>{error ?.message || 'unknown mistake'}</p>
    </div>
)}