import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart} from '../redux/actions/userAction'
import FeatherIcon from 'feather-icons-react'

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
        <div class="card ml-5 my-3" style={{ width: "17rem", display: "inline-block" }}>
            <div class="card-body">
                <div className="category-tag">
                    {/* <FeatherIcon icon="grid"className="icon s15"/> */}
                    <span>{props.course.category}</span>
                </div>
                <img class="card-img" src={require('../uploads/Freevector_Covid-19-Technology-Supporting-Technology_Illustration_Mf0321_generated.jpg')} />
                <div className="card-txt">
                    <h5><strong>{props.course.title}</strong></h5>
                    <span style={{ fontSize: "0.8rem"}}>Багш: <Link to={`/profile`}>{props.course.createdBy.name}</Link></span>
                    {/* <div className="category-tag">
                        <FeatherIcon icon="grid"className="icon s15"/>
                        <span>{props.course.category}</span>
                    </div> */}
                    <ul className="views-dur">
                        <li style={{ width: "50%" }}>
                            <FeatherIcon icon="eye"className="icon s20"/>
                            <span>{props.course.userWhoHasBought.length}</span>
                        </li>
                        <li>
                            <FeatherIcon icon="clock" className="icon s20"/>
                            <span>{props.course.duration} мин</span>
                        </li>
                    </ul>
                    <div style={{ width: "100%", marginBottom: "0.5rem"}}>
                        <FeatherIcon icon="tag"className="icon s20"/>
                        <span>{props.course.price}₮</span>
                    </div>
                    
                    {store.user._id !== props.course.createdBy._id ? <button disabled={isDisabled} onClick={addToCartClickHandler} className="btn btn-info btn-block">{isDisabled ? "Сагсанд нэмэгдсэн" : "Сагсанд нэмэх"} </button>
                        : <Link to={`/courseDetails/${props.course._id}`} className="btn btn-info btn-block">Үзэх </Link>}
                </div>
            </div>
        </div>
    )
}

export default Card
