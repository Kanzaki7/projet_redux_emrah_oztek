import '../../App.css'
import { useParams } from 'react-router'
import Navbar from '../Navbar/Navbar'
import { useSelector, useDispatch } from "react-redux"
import Footer from '../Footer/Footer'
import { addCart } from '../../features/CartSlice/CartSlice'

export default function Products(props) {

    const connexion = useSelector((state) => state.login.value)

    let { id } = useParams()

    const articlesArray = useSelector((state) => state.articles.value)
    console.log(articlesArray[0].image);

    const dispatch = useDispatch();

    let addProduct = ({name, price, total}) => {
        dispatch(addCart({name, price, total}))
        props.setTotal(props.total+total)
    }

    return(
        <div className='products'>
            <Navbar/>
            <div className='product'>
                <div className='productImg'>
                    <img src={articlesArray[id].image} alt="" />
                </div>
                <div className='productDetail'>
                    <div className='productTitle'>{articlesArray[id].name}</div>
                    <div className='productPrice'>€{articlesArray[id].price} EUR</div>
                    {connexion[2].input === "logout" && <div className='productBtn' onClick={()=>dispatch(addProduct({name: articlesArray[id].name, price: articlesArray[id].price, total: articlesArray[id].price}))}>ADD TO CART</div>}
                    <div>Category : {articlesArray[id].category}</div>
                    <div className='productDetails'>
                    <div>{articlesArray[id].description}</div>
                        {articlesArray[id].category === "bonbon" &&
                            <div className='hiddenDetails'>
                                <div>INGREDIENTS : {articlesArray[id].ingredients}</div>
                                <div>ALLERGY ADVICE : {articlesArray[id].allergy_advice}</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}