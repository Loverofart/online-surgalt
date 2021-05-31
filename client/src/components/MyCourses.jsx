import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import VideoPlayer from './VideoPlayer'
import { allCourses, myCourses } from '../redux/actions/userAction'
import Card from './MyCourseCard'


const MyCourses = () => {
    const user = useSelector(store => store.userRoot.user)
    const [arr, setArr] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(myCourses())
    }, [])

    useEffect(() => {
        if (user.coursesBought) {
            setArr(user.coursesBought)
        }  
    },[user])

    
    
    return (
        <div className="container" style={{marginTop:"30px"}}>
            <div className="row">
                <div className="page-title">
                    <h2>ҮЗЭЖ БУЙ СУРГАЛТУУД</h2>
                </div>
            </div>
            <div className="row my-course-list">
                {/* <div className="col">
                    
                    {arr.length !== 0 && arr.map((course, index)=>
                       <VideoPlayer key={index} course={course}  />
                    )}
                    
                </div> */}
                    {arr.length !== 0 && arr.map((data, index)=>
                    //    <VideoPlayer key={index} course={course}  />
                       <Card key={index} course={data} />
                    )}

            </div>
        </div>
    )
}

export default MyCourses
