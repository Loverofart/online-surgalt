import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {courseDetailsById} from '../redux/actions/userAction'
import VideoPlayer from './VideoPlayer'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

const WatchCourse = (props) => {
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
          <div className="course-title">
            <h3 class="card-title">{course.title}</h3>
          </div>
            <div className="row">
                <div className="col-md-6" style={{height: "520px"}}>
                    <VideoPlayer key={course._id} course={course}  />
                    {/* {course.file && <><video width="100%" controls>
                        <source src={course.file} type="video/mp4" />
                    </video>
                        <h4 class="card-title"><strong>Гарчиг: </strong>{course.title}</h4>
                    </>} */}
                </div>
                <div className="col-md-6" style={{height: "520px"}}>
                  <div className="course-contents">
                    <div className="course-contents-header">
                      <h5>Хичээлүүд</h5>
                    </div>
                    <div className="course-contents-videos">
                      <ul>
                        <li className="active">
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          <span>Удиртгал</span>
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          VS Code editor суулгах, тохируулах
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Windows пс дээр ажиллах орчноо бэлтгэх
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Анхны аппаа бичиж АНДРОЙД гар утас дээр ажиллуулцгаая
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          IPHONE утас дээр аппаа ажиллуулцгаая
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Mac компьютер дээр xcode, android studio суулгацгаая!
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          <span>React native аппын бүтэц, jsx, функц, компонент, хэлбэржүүлэлтийн дүрэм</span>
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Товчтой ажиллах, товч дээр дарах эвентийг програмчлах
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Шинээр дэлгэц үүсгэх, React Navigation ашиглах
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Declarative, Reactive, Virtual DOM ойлголтууд
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Компонент гэж юу вэ? Түүний үүрэг, бүтэц
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          TextInput, Image, Button ашиглан логин дэлгэц хийцгээе! 
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Declarative, Reactive, Virtual DOM ойлголтууд
                        </li>
                        <li>
                          <FeatherIcon icon="check-circle" fill="white" stroke="#ccc" width="18" height="18"/>
                          Declarative, Reactive, Virtual DOM ойлголтууд
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div style={{ width:"96.5%", marginLeft:"2rem" }}>
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

export default WatchCourse
