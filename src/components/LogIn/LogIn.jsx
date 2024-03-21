import '../../App.css'
import Navbar from '../Navbar/Navbar'
import { auth } from '../../features/LoginSlice/LoginSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
// import { useLocalStorage } from "@uidotdev/usehooks"; 

export default function LogIn(params) {

    const connexion = useSelector((state) => state.login.value)
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className='logIn'>
            <Navbar/>
            {connexion[2].input === "login" && 
                <div className='form'>
                    <div className='textLogin'>Login : </div>
                    <input type="text" placeholder='enter your email' className='inputLogin' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='enter your password' className='inputLogin' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <div className='btnLogin' onClick={() => dispatch(auth({email, password}))}>LOGIN</div>
                </div>
            }
            {connexion[2].input === "logout" && 
                <div className='form'>
                    <h1>You are already connected</h1>
                    <Link to="/" className='link'><div className='btnLogin'>Return Home</div></Link>
                </div>
            }
        </div>
    )
}