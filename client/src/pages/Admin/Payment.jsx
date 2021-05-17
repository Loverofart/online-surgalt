import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {buyCourse} from '../../redux/actions/userAction'

const Payment = (props) => {
    const history = useHistory()
    const store = useSelector(store => store.userRoot)
    const dispatch = useDispatch()
    const [courseId, setCourseId] = useState("")
    const [course, setCourse] = useState({})
    useEffect(() => {
        setCourseId(props.match.params.courseId)
       
    }, [props.match.params.courseId])
    useEffect(() => {
        const curr_course = store.user.cart.find(obj => {
            return obj._id === props.match.params.courseId
        })
        setCourse(curr_course)   
    },[])

    const clickHandler = (courseId) => {
        dispatch(buyCourse(courseId,history))
    }
    return (
        <div class="container" style={{ marginTop: "100px" }}>
            <div class="row">
                <div class="col-md-4 offset-md-4 border">
                    {course ? <div class="card-body">
                        <h5 class="card-title">{course.title}</h5>
                        <h5 class="card-title">Үнэ: {course.price}$</h5>
                        <h6 class="card-title">Үргэлжлэх хугацаа: {course.duration} мин</h6>
                        <h6 class="card-title">Төрөл: {course.category}</h6>
                        <p class="card-text">{course.description}</p> 
                        <button onClick={()=>clickHandler(course._id)} type="button" class="btn btn-primary">Төлбөр төлөх</button>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default Payment
