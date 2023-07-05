import classNames from 'classnames'
import { Container } from '../Layout/Container/container'
import s from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
const list = [
    {
    link:'women',
    title :'Женщины',
    catigories:[
        {link:"bras",title:"Бюстгальтеры"},
        {link:"panties",title:"Трусы"},
        {link:"socks",title:"Носки"},
        {link:"bathrobes",title:"Халаты"},
        {link:"thermal",title:"Термобелье"},
        {link:"pigamas",title:"Пижамы"},
    ]},
    {
    link:'men',
    title :'Мужчины',
    categories:[        
        {link:"panties",title:"Трусы"},
        {link:"socks",title:"Носки"},
        {link:"bathrobes",title:"Халаты"},
        {link:"thermal",title:"Термобелье"}        
    ]}
]

export const Footer =() => (
    <footer >
        <Container>
            <div className={s.container}>
                <div className={s.category}>
                    <h2 className={classNames(s.title,s.categoryTitle)}>Каталог</h2>
                    <ul className={s.categoryList}>
                        {list.map(item =>{
                            <li key={item.link} className={s.categoryItem}>
                            <h3 className={s.categorySubtitle}>
                            <NavLink to={item.link}  className={s.link}>{item.title}</NavLink>
                            </h3>
                            <ul className={s.categorySublist}>
                            {console.log(item.categories)}
                                            
                            </ul>
                            </li>                        
                        })}
                    </ul>
                </div>
            </div>
        </Container> 
    </footer>
)