import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart} from '../redux/actions/userAction'

const Card = (props) => {
    const store = useSelector(store => store.userRoot)
    const [isDisabled, setIsDisabled] = useState(false)
    
    const dispatch = useDispatch()
    const addToCartClickHandler = () => {
        dispatch(addToCart(props.course._id))
    }


    useEffect(() => {
        const alreadyAdded = store.user.cart.find(obj => {
            return obj._id === props.course._id
        })
        if (alreadyAdded) {
            setIsDisabled(true)
        }
    }, [store.user.cart])
    
    return (
        <div class="card ml-5 my-3" style={{ width: "18rem", display: "inline-block" }}>
            <div class="card-body">
                <img class="card-img" src={require('../uploads/Freevector_Covid-19-Technology-Supporting-Technology_Illustration_Mf0321_generated.jpg')} />
                <div className="card-txt">
                    <h4 class="card-title"><strong>{props.course.title}</strong></h4>
                    <p>Багш: <Link to={`/profile`}>{props.course.createdBy.name}</Link></p>
                    <h5 class="card-title"><strong>Хичээлийг үзэж буй: </strong>{props.course.userWhoHasBought.length}</h5>
                    <h5 class="card-title"><strong>Үнэ: </strong>{props.course.price}₮</h5>
                    <h6 class="card-title"><strong>Үргэлжлэх хугацаа: </strong>{props.course.duration} мин</h6>
                    <h6 class="card-title"><strong>Төрөл: </strong>{props.course.category}</h6>
                    {/* <p class="card-text"><strong>Тайлбар: </strong>{props.course.description}</p> */}
                    {store.user._id !== props.course.createdBy._id ? <button disabled={isDisabled} onClick={addToCartClickHandler} className="btn btn-info btn-block">{isDisabled ? "Сагсанд нэмэгдсэн" : "Сагсанд нэмэх"} </button>
                        : <Link to={`/courseDetails/${props.course._id}`} className="btn btn-info btn-block">Үзэх </Link>}
                </div>
            </div>
        </div>
    )
}

export default Card
