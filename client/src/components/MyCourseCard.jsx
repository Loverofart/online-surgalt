import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart} from '../redux/actions/userAction'
import FeatherIcon from 'feather-icons-react'
import Axios from 'axios'
import PDF from './Certificate'

const MyCourseCard = (props) => {
    const store = useSelector(store => store.userRoot)
    const [isDisabled, setIsDisabled] = useState(false)
    const [wantsPdf, setWantsPdf] = useState(false)

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
        <>
            <div className="my-course-card" style={{display: "inline-block" }}>
                <div className="my-course-card-body">
                    <div className="category-tag">
                        <span>{props.course.category}</span>
                    </div>
                    {/* <img class="card-img" src={require('../uploads/Freevector_Covid-19-Technology-Supporting-Technology_Illustration_Mf0321_generated.jpg')} /> */}
                    <div className="card-main-content-centered">
                        <div className="card-txt">
                            <h3><strong>{props.course.title}</strong></h3>
                            <span style={{ fontSize: "0.8rem"}}>Багш: {props.course.createdBy.name}</span>
                            <ul className="views-dur">
                                <li>
                                    <FeatherIcon icon="clock" className="icon s20"/>
                                    <span>{props.course.duration} мин</span>
                                </li>
                            </ul>
                        </div>
                        <div className="download-pdf">
                            {/* <button class="btn btn-download-pdf" onClick={() => setWantsPdf(true)}>
                                Сертификат авах
                            </button> */}
                            <Link className="btn btn-download-pdf" to={`/getCertificate/${props.course._id}`} title={props.course.title} name={store.user.name} percentage={"90"}>Сертификат авах</Link>
                        </div>
                        <div className="gowatch">
                            <Link to={`/watchCourse/${props.course._id}`} className="btn btn-gowatch">
                                <FeatherIcon icon="play"className="gowatch-icon" width="34" height="34" stroke="white"/>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    ) 
}

export default MyCourseCard
