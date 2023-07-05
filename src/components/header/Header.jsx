import { Navigation } from "./Navigation/navigation.jsx";
import { Top } from "./Top/top.jsx";


export const Header = ({list}) => (
    <header>
        <Top/>
        <Navigation list={list}/>
    </header>
)