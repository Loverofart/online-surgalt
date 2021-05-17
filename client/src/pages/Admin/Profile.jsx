import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profile = () => {
    const user = useSelector(store => store.userRoot.user)

    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <div className="row">
                {console.log("as", user)}
                <div className="col-md-6">
                    <h2>Нэр: {user.name}</h2>
                    <h2>Email: {user.email}</h2>
                    <h2>Явуулж буй сургалтууд: {user.coursesCreated && user.coursesCreated.length} </h2>
                    <h2>Нийт орлого: {user.totalIncome}₮</h2>
                    <h2>Миний худалдаж авсан хичээл: {user.coursesBought && user.coursesBought.length} </h2>
                    <h2>Зарцуулсан мөнгө: {user.totalExpenditure}₮</h2>
                    
                    {user.coursesCreated.length !== 0 && 
                        user.coursesCreated.map(obj =>
                            < div class="card ml-5 my-3" style={{ width: "25rem", display: "inline-block" }}>
                                <video width="400" controls>
                                    <source src={obj.file} type="video/mp4" />
                                </video>
                                <h4 class="card-title"><strong>Гарчиг: </strong>{obj.title}</h4>
                                <h5 class="card-title"><strong>Үргэлжлэх хугацаа: </strong>{obj.duration} мин</h5>
                                <h5 class="card-title"><strong>Төрөл: </strong> {obj.category}</h5>
                                <Link to={`/courseDetails/${obj._id}`}>Форум </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
