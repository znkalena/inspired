import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";


export const Navigation =() => (
    <nav>
        <div className="conteiner">
            <Gender/>
            <Category/>
        </div>
    </nav>
)