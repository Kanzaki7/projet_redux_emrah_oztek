import '../../App.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { auth } from '../../features/LoginSlice/LoginSlice';
import { changeClass } from '../../features/NavclassSlice/NavclassSlice';

export default function Navbar() {
    const connexion = useSelector((state) => state.login.value)
    const dispatch = useDispatch();

    const navclass = useSelector((state) => state.navclass.value)
    const tableau = useSelector((state) => state.cart.value)

    return(
        <div className={navclass === "home" ? "navHome" : navclass === "ollivanders" ? "navOllivanders" : navclass === "honeydukes" ? "navHoneydukes" : navclass === "menagerie" ? "navMenagerie" : navclass === "quidditch" ? "navQuidditch" : null}>
            <div className='navTitle'>
                {navclass === "home" && <div className='hogsmeade'>Hogsmeade</div>}
                {navclass === "ollivanders" && <div className='olli'>Ollivanders</div>}
                {navclass === "honeydukes" && <div className='honey'>Honeydukes</div>}
                {navclass === "menagerie" && <div className='mag'>Magical Menagerie</div>}
                {navclass === "quidditch" && <div className='quid'>Quidditch Supplies</div>}
            </div>
            <div className='navLinks'>
                <Link to="/" className='link'><div id='home' onClick={(e)=>dispatch(changeClass(e.target.id))}>Home</div></Link>
                <Link to="/ollivanders" className='link'><div id='ollivanders' onClick={(e)=>dispatch(changeClass(e.target.id))}>Ollivanders</div></Link>
                <Link to="/honeydukes" className='link'><div id='honeydukes' onClick={(e)=>dispatch(changeClass(e.target.id))}>Honeydukes</div></Link>
                <Link to="/menagerie" className='link'><div id='menagerie' onClick={(e)=>dispatch(changeClass(e.target.id))}>Magical Menagerie</div></Link>
                <Link to="/quidditch" className='link'><div id='quidditch' onClick={(e)=>dispatch(changeClass(e.target.id))}>Quidditch Supplies</div></Link>
            </div>
            {connexion[2].input === "login" && 
                <div className='navLog'>
                <div>Connected as guest</div>
                    <Link to='/logIn' className='linkLog' id='home'>Log In</Link>
                </div>
            }
            {connexion[2].input === "logout" && 
                <div className='navLog'>
                    <div>Connected as {connexion[0].input}</div>
                    <Link to='/logIn' className='linkLog' onClick={()=>dispatch(auth())}><div>Log Out</div></Link>
                    <Link to='/cart' className='linkLog'><div id='home' onClick={(e)=>dispatch(changeClass(e.target.id))}>Cart({tableau.length})</div></Link>
                </div>
            }
        </div>
    )
}