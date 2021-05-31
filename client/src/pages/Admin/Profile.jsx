import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MyCourseCard from '../../components/MyCourseCard'
const Profile = () => {
    const user = useSelector(store => store.userRoot.user)

    return (
        <div className="container" style={{ marginTop: "60px" }}>
            <div className="page-title" style={{marginBottom:"1rem"}}>
                <h3>МИНИЙ БҮРТГЭЛ</h3>
            </div>
            <div className="row profile-row">
                {console.log("as", user)}
                <div className="col-md-12">
                    <h5>Нэр: {user.name}</h5>
                    <h5>Email: {user.email}</h5>
                    
                    <h5>Нийт орлого: {user.totalIncome}₮</h5>
                    <h5>Миний худалдаж авсан хичээл: {user.coursesBought && user.coursesBought.length} </h5>
                    {/* <h2>Зарцуулсан мөнгө: {user.totalExpenditure}₮</h2> */}
                    <h3>Явуулж буй сургалтууд: {user.coursesCreated && user.coursesCreated.length} </h3>
                    {user.coursesCreated.length !== 0 && 
                        user.coursesCreated.map((data, index)=>
                            // < div class="card ml-5 my-3" style={{ width: "25rem", display: "inline-block" }}>
                            //     <video width="400" controls>
                            //         <source src={obj.file} type="video/mp4" />
                            //     </video>
                            //     <h4 class="card-title"><strong>Гарчиг: </strong>{obj.title}</h4>
                            //     <h5 class="card-title"><strong>Үргэлжлэх хугацаа: </strong>{obj.duration} мин</h5>
                            //     <h5 class="card-title"><strong>Төрөл: </strong> {obj.category}</h5>
                            //     <Link to={`/courseQna/${obj._id}`}>Форум </Link>
                            // </div>
                            <MyCourseCard key={index} course={data} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
