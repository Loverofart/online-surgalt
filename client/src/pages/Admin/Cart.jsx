import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import CartCard from '../../components/CartCard'


const Cart = () => {
    const user = useSelector(store => store.userRoot.user)
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (user.cart.length !== 0) {
            setCart(user.cart)
        }
    },[user])
   

    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <div className="row">
                <div className="page-title">
                    <h1>Сагс</h1>
                </div>
            </div>
            <div className="row justify-content-center">
               
                <div className="col">
                    {cart.map((data, index) =>
                        <CartCard key={index} course={data} />
                    )}

                </div>
            </div>
            
        </div>
    )
}

export default Cart
