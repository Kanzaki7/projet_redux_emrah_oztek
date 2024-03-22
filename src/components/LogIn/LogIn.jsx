import '../../App.css'
import Navbar from '../Navbar/Navbar'
import { auth } from '../../features/LoginSlice/LoginSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
// import { useLocalStorage } from "@uidotdev/usehooks"; 
import Footer from '../Footer/Footer'
import ModalLogin from '../ModalLogin/ModalLogin'

export default function LogIn(params) {

    const connexion = useSelector((state) => state.login.value)
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [display, setDisplay] = useState("caché")

    const handleDisplay = ({email, password}) => {
    if (connexion[0].input !== email || connexion[1].input !== password) {
      setDisplay("afficher")
    } else {
        dispatch(auth({email, password}))
    }
  }

    return(
        <div className='logIn'>
            <Navbar/>
            {connexion[2].input === "login" && 
                <div className='form'>
                    <div className='textLogin'>Login : </div>
                    <input type="text" placeholder='enter your email' className='inputLogin' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='enter your password' className='inputLogin' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <div className='btnLogin' onClick={() => handleDisplay({email, password})}>LOGIN</div>
                </div>
            }
            {display === "afficher" && <ModalLogin setDisplay={setDisplay}/>}
            {connexion[2].input === "logout" && 
                <div className='form'>
                    <h1>Welcome back, {email}!</h1>
                    <Link to="/" className='link'><div className='btnLogin'>Return Home</div></Link>
                </div>
            }
            <Footer/>
        </div>
    )
}