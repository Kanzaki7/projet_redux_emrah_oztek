import '../../App.css'
import Navbar from '../Navbar/Navbar'
import sweets from '../../sweetTrolley.json'
import { useState, useEffect } from 'react'


export default function Home() {
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
    const [filtArray, setFiltArray] = useState([])

    useEffect(() => {
        let filt = sweets.filter(l =>l.name.toLowerCase().includes(captureInput))
        setFiltArray(filt)
    }, [captureInput])
    
    
    return(
        <div className="home">
            <Navbar/>
            <div className='carousel'>
                <div className='tints'></div>
                <img src={images[random]} alt="" />
            </div>
            <div className='articlesMap'>
                <div>
                    <input type="text" value={captureInput} onChange={(e)=>setCaptureInput(e.target.value)}/>
                </div>
                <div className='articles'>
                    {
                        filtArray.map((sweet, index) => (
                            <div key={index} className='article'>
                                <img src={sweet.image} alt="" />
                                {/* <div>{sweet.name}</div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}