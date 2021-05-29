import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart} from '../redux/actions/userAction'
import FeatherIcon from 'feather-icons-react'

const MyCourseCard = (props) => {
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
        <div class="my-course-card" style={{display: "inline-block" }}>
            <div class="my-course-card-body">
                <div className="category-tag">
                    {/* <FeatherIcon icon="grid"className="icon s15"/> */}
                    <span>{props.course.category}</span>
                </div>
                {/* <img class="card-img" src={require('../uploads/Freevector_Covid-19-Technology-Supporting-Technology_Illustration_Mf0321_generated.jpg')} /> */}
                <div className="card-main-content-centered">
                  <div className="card-txt">
                    <h3><strong>{props.course.title}</strong></h3>
                    <span style={{ fontSize: "0.8rem"}}>Багш: <Link to={`/profile`}>{props.course.createdBy.name}</Link></span>
                    {/* <div className="category-tag">
                        <FeatherIcon icon="grid"className="icon s15"/>
                        <span>{props.course.category}</span>
                    </div> */}
                    <ul className="views-dur">
                        <li>
                            <FeatherIcon icon="clock" className="icon s20"/>
                            <span>{props.course.duration} мин</span>
                        </li>
                    </ul>
                </div>
                <div class="gowatch">
                  <Link to={`/courseQna/${props.course._id}`} className="btn btn-gowatch">
                    <FeatherIcon icon="play"className="gowatch-icon" width="34" height="34" stroke="white"/>
                  </Link>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default MyCourseCard
