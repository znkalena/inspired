import { Navigation } from "./Navigation/navigation.jsx";
import { Top } from "./Top/top.jsx";
import s from './Header.module.scss'

export const Header = () => (
    <header className={s.header}>
        <Top/>
        <Navigation />
    </header>
)