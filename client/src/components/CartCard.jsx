import React from 'react'
import {Link} from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

const CartCard = (props) => {
    // return (
    //     <div class="card ml-5 my-3" style={{ width: "17rem", display: "inline-block" }}>
    //         <div class="card-body">
    //             <h4 class="card-title"><strong>{props.course.title}</strong></h4>
    //             <h5 class="card-title"><strong>Үнэ: </strong>{props.course.price}$</h5>
    //             <h6 class="card-title"><strong>Үргэлжлэх хугацаа: </strong>{props.course.duration} мин</h6>
    //             <h6 class="card-title"><strong>Төрөл: </strong>{props.course.category}</h6>
    //             <p class="card-text">{props.course.description}</p>
    //             <Link to={`/payment/${props.course._id}`} className="btn btn-info btn-block">Авах</Link>
    //         </div>
    //     </div>
    // )
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
                    <Link to={`/payment/${props.course._id}`} className="btn btn-info btn-block">Авах</Link>
                </div>
            </div>
        </div>
    )
}

export default CartCard
