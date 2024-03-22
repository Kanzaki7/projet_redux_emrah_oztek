import '../../App.css'
import Navbar from '../Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart, checkOut, plusUn, moinsUn } from '../../features/CartSlice/CartSlice'
import { useState } from 'react'
import Footer from '../Footer/Footer'


export default function Cart(props) {

    const tableau = useSelector((state) => state.cart.value)
    console.log(tableau);
    const dispatch = useDispatch();

    let deleteAll = (index) => {
        props.setTotal(props.total-tableau[index].total)
        dispatch(deleteCart(index))
    }

    let noTotal = () => {
        dispatch(checkOut())
        props.setTotal(0)
    }

    let addOne = (index) => {
        dispatch(plusUn(index))
        props.setTotal(props.total+tableau[index].price)
    }
    let removeOne = (index) => {
        dispatch(moinsUn(index))
        props.setTotal(props.total-tableau[index].price)
        if (tableau[index].quantity === 1) {
            deleteAll(index)
        }
    }

    return(
        <div className='cart'>
            <Navbar/>
            <div className='cartTab'>
                {
                    tableau.map((tab, index) => (
                        <div key={index} className='tableau'>
                            <div>{tab.name}</div>
                            <div>€{tab.price} EUR</div>
                            <div>{tab.quantity} ITEMS</div>
                            <div>€{tab.total} EUR</div>
                            <button onClick={()=>addOne(index)}>+1</button>
                            <button onClick={()=>removeOne(index)}>-1</button>
                            <div className='productBtn' onClick={()=>deleteAll(index)}>Remove</div>
                        </div>
                    ))
                }
                <div>TOTAL : €{props.total}</div>
                <button onClick={()=>noTotal()}>Check Out</button>
            </div>
            <Footer/>
        </div>
    )
}