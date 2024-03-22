import '../../App.css'
import { useSelector, useDispatch } from "react-redux"

export default function Footer(params) {

    const navclass = useSelector((state) => state.navclass.value)

    return(
        <div className={navclass === "home" ? "footerHome" : navclass === "ollivanders" ? "footerOllivanders" : navclass === "honeydukes" ? "footerHoneydukes" : navclass === "menagerie" ? "footerMenagerie" : navclass === "quidditch" ? "footerQuidditch" : null}>
            <div className='footDiv'>
                <div className='footertitle'>Information</div>
                <div>Deals</div>
                <div>New offers</div>
            </div>
            <div className='footDiv'>
                <div className='footertitle'>My Account</div>
                <div>My orders</div>
                <div>Contact us</div>
            </div>
            <div className='footDiv'>
                <div className='footertitle'>Follow us</div>
                <div className='divFootImg'><img src={"/assets/img/dailyProphet.png"} alt="" /></div>
            </div>
            <div className='footDiv'>
                <div className='footertitle'>Wizard Corporation</div>
                <div>HOGSMEADE</div>
                <div>Diagonal Alley 9 3/4</div>
                <div>Scotland</div>
            </div>
        </div>
    )
}