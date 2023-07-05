import { Category } from "./Category/Category.jsx";
import { Gender } from "./Gender/Gender.jsx";
import {Container} from '/src/components/Layout/Container/Container'

export const Navigation =({list}) => (
    <nav>
        <Container>
            <Gender list={list} />
            <Category list={list} />
        </Container>
    </nav>
)