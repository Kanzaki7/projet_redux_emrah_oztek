import '../../App.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { auth } from '../../features/LoginSlice/LoginSlice';
import { changeClass } from '../../features/NavclassSlice/NavclassSlice';
import { useState } from 'react'

export default function Navbar() {
    const connexion = useSelector((state) => state.login.value)
    const dispatch = useDispatch();

    const navclass = useSelector((state) => state.navclass.value)
    const tableau = useSelector((state) => state.cart.value)

    const [showBurger, setShowBurger] = useState(false);

    return(
        showBurger == false ? (
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
            <div className='burgermenu'>
                <input id="checkbox" type="checkbox" onClick={()=>setShowBurger(!showBurger)} />
                <label className="toggle" htmlFor="checkbox">
                    <div id="bar1" class="bars"></div>
                    <div id="bar2" class="bars"></div>
                    <div id="bar3" class="bars"></div>
                </label>
            </div>
        </div>
        ) : (
            <div className='bigBurgerMenu'>
                <div className='burgermenuX'>
                    <input id="checkbox" type="checkbox" checked="checked" onClick={()=>setShowBurger(!showBurger)} />
                    <label className="toggle" htmlFor="checkbox">
                        <div id="bar1" class="bars"></div>
                        <div id="bar2" class="bars"></div>
                        <div id="bar3" class="bars"></div>
                    </label>
                </div>
                <nav className={showBurger ? "nav-menuShow" : "nav-menu"} id="navMenu">
                    <Link to="/" className='linkBurger'><div id='home' onClick={(e)=>dispatch(changeClass(e.target.id))}>Home</div></Link>
                    <Link to="/ollivanders" className='linkBurger'><div id='ollivanders' onClick={(e)=>dispatch(changeClass(e.target.id))}>Ollivanders</div></Link>
                    <Link to="/honeydukes" className='linkBurger'><div id='honeydukes' onClick={(e)=>dispatch(changeClass(e.target.id))}>Honeydukes</div></Link>
                    <Link to="/menagerie" className='linkBurger'><div id='menagerie' onClick={(e)=>dispatch(changeClass(e.target.id))}>Magical Menagerie</div></Link>
                    <Link to="/quidditch" className='linkBurger'><div id='quidditch' onClick={(e)=>dispatch(changeClass(e.target.id))}>Quidditch Supplies</div></Link>
                </nav>
            </div>
        )
    )
}