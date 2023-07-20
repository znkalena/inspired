import { Navigation } from "./Navigation/navigation.jsx";
import { Top } from "./Top/Top";
import s from './Header.module.scss'
import { Search } from "../Search/Search.jsx";
import { useState } from "react";

export const Header = () => {
const [openSearch,setOpenSearch] = useState(false);
    return (
        <header className={s.header}>
            <Top setOpenSearch={setOpenSearch} openSearch={openSearch} />
            <Search openSearch={openSearch} />
            <Navigation />
        </header>
    )
} 