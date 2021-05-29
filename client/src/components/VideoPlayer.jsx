import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {askQuestion} from '../redux/actions/userAction'

const VideoPlayer = (props) => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(askQuestion(props.course._id, message))
        setMessage("")
    }
    return (
        <div class="card video-card ml-3" style={{ width: "100%", display: "inline-block" }}>
            {/* <h4 class="card-title"><strong>Гарчиг: </strong>{props.course.title}</h4> */}
            <video width="100%" controls>
                <source src={props.course.file} type="video/mp4" />
            </video>
            
            {/* <h5 class="card-title"><strong>Үргэлжлэх хугацаа: </strong>{props.course.duration} мин</h5>
            <h5 class="card-title"><strong>Төрөл: </strong> {props.course.category}</h5>  */}
            <Link to={`/courseQna/${props.course._id}`} style={{fontSize:"large", margin:"1rem"}}>QNA </Link>
            <textarea onChange={(e) => setMessage(e.target.value)} type="text" value={message} id="exampleInputPassword1"
                className="form-control"
                     />
            <button onClick={clickHandler} type="button" className="btn btn-qna">Илгээх</button>
        </div>
    )
}

export default VideoPlayer
