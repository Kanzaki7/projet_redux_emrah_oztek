import '../../App.css'
import { useParams } from 'react-router'
import Navbar from '../Navbar/Navbar'
import { useSelector, useDispatch } from "react-redux"

export default function Products(params) {

    const connexion = useSelector((state) => state.login.value)

    let { id } = useParams()

    const articlesArray = useSelector((state) => state.articles.value)
    console.log(articlesArray[0].image);
    // console.log(produits[0].image);
    // const dispatch = useDispatch();

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
                    {connexion[2].input === "logout" && <div className='productBtn'>ADD TO CART</div>}
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
        </div>
    )
}