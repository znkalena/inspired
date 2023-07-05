import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";
import {Container} from '/src/components/Layout/Container/Container'

export const Navigation =() => (
    <nav>
        <Container>
            <Gender/>
            <Category/>
        </Container>
    </nav>
)