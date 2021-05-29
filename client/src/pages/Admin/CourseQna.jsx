import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {courseDetailsById} from '../../redux/actions/userAction'
// import VideoPlayer from '../../components/VideoPlayer'
import { Link } from 'react-router-dom'

const CourseDetails = (props) => {
    const dispatch = useDispatch()
    const singleCourse = useSelector(store=>store.courseRoot.singleCourse)
    const [course, setCourse] = useState({})

    useEffect(() => {
        dispatch(courseDetailsById(props.match.params.courseId))
    }, [props.match.params.courseId])
    
    useEffect(() => {
        if (singleCourse) {
            setCourse(singleCourse)
        }
    },[singleCourse])
    return (
        <div className="container">
            <div className="row">
                {/* <div className="col-md-6">
                    {course.file && <><video width="100%" controls>
                        <source src={course.file} type="video/mp4" />
                    </video>
                        <h4 class="card-title"><strong>Гарчиг: </strong>{course.title}</h4>
                        <h5 class="card-title"><strong>Үргэлжлэх хугацаа: </strong>{course.duration} мин</h5>
                        <h5 class="card-title"><strong>Төрөл: </strong> {course.category}</h5>
                        
                    </>}
                </div> */}
                <div className="col-md-11" style={{ margin: "auto" }}>
                    <div class="qna-container">
                        <div className="qna-header">
                            <h3>Форум</h3>
                        </div>
                        <div className="qna-chats">
                            {course.qna && course.qna.map(obj =>
                            <>
                                <p><strong>{obj.sender}:</strong> {obj.message}</p>
                                </>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
