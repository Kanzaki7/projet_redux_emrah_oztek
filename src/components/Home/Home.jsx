import '../../App.css'
import Navbar from '../Navbar/Navbar'
import sweets from '../../sweetTrolley.json'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { arrayArticles } from '../../features/ArticlesSlice/ArticlesSlice'
import { Link } from 'react-router-dom'
import { addCart } from '../../features/CartSlice/CartSlice'


export default function Home(props) {
    const [images, setImage] = useState([
        sweets[0].image,
        sweets[1].image,
        sweets[2].image,
        sweets[3].image,
        sweets[4].image,
        sweets[5].image,
        sweets[6].image,
        sweets[7].image,
        sweets[8].image,
        sweets[9].image,
        sweets[10].image,
        sweets[11].image,
        sweets[12].image,
        sweets[13].image,
        sweets[14].image,
        sweets[15].image,
        sweets[16].image,
        sweets[17].image,
        sweets[18].image,
        sweets[19].image,
        sweets[20].image,
        sweets[21].image
    ])
    const [random, setRandom] = useState(Math.floor(Math.random()*images.length))

    setTimeout(() => {
        let rand = [Math.floor(Math.random()*images.length)]
        setRandom(rand)
        console.log(random);
    }, 5000);

 

    const [captureInput, setCaptureInput] = useState("")
    const articlesArray = useSelector((state) => state.articles.value)
    const dispatch = useDispatch();

    const connexion = useSelector((state) => state.login.value)

    let filter = (e) => {
        setCaptureInput(e.target.value)
        dispatch(arrayArticles(captureInput))
    }


    let addProduct = ({name, price, total}) => {
        dispatch(addCart({name, price, total}))
        props.setTotal(props.total+total)
    }
    

    
    return(
        <div className="home">
            <Navbar/>
            <div className='carousel'>
                <div className='tints'></div>
                <img src={images[random]} alt="" />
            </div>
            <div className='articlesMap'>
                <div>
                    <input type="text" value={captureInput} onChange={filter}/>
                </div>
                <div className='articles'>
                    {
                        articlesArray.map((sweet, index) => (
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
            </div>
        </div>
    )
}