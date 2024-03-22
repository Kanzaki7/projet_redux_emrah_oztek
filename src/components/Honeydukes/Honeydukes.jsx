import '../../App.css'
import Navbar from '../Navbar/Navbar'
import { useSelector, useDispatch } from "react-redux"
import { arrayArticles } from '../../features/ArticlesSlice/ArticlesSlice'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { addCart } from '../../features/CartSlice/CartSlice'

export default function Honeydukes(props) {

    const articlesArray = useSelector((state) => state.articles.value)
    const dispatch = useDispatch();
    const connexion = useSelector((state) => state.login.value)

    let addProduct = ({name, price, total}) => {
        dispatch(addCart({name, price, total}))
        props.setTotal(props.total+total)
    }

    return(
        <div className='ollivanders'>
            <Navbar/>
            <div className='wands'>
            {
                        articlesArray.filter(l => l.category === "bonbon").map((sweet, index) => (
                            <div key={index} className='article'>
                                <div className='articleDivImg'>
                                    <img src={sweet.image} alt="" className='imgPrincipale'/>
                                </div>
                                <div>{sweet.name}</div>
                                <Link to={"/products/"+articlesArray.indexOf(sweet)}><img src={"./assets/img/loupe.png"} alt="" className='imgLoupe'/></Link>
                                {
                                    connexion[2].input === "logout" &&
                                    <div className='hiddenInfo'>
                                        <div>€{sweet.price} EUR</div>
                                        <div className='productBtn' onClick={()=>dispatch(addProduct({name: sweet.name, price: sweet.price, total: sweet.price}))}>ADD TO CART</div>
                                    </div>
                                }
                            </div>
                        ))
                    }
            </div>
            <Footer/>  
        </div>
    )
}