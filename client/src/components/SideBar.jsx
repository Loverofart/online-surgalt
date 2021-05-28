import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../redux/actions/userAction'
import '../css/SideBar.css'
import '../css/props.css' 
import FeatherIcon from 'feather-icons-react';
import logo from '../uploads/laptop-mac.svg';
import userPic from '../uploads/red-user.png';

const SideBar = () => {
    const user = useSelector(store => store.userRoot.user)
    const history = useHistory()
    const [name, setName] = useState("")
    const [cartLength, setCartLength] = useState(0)
    const [courseLength, setCourseLength] = useState(0)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(userLogout())
        history.push('/')
    }
  
    useEffect(() => {
        if (user.name) {
            setName(user.name)
        }  
    }, [user])
    useEffect(() => {
        if (user.cart) {
            setCartLength(user.cart.length)
        }
    }, [user])
    useEffect(() => {
        if (user.coursesBought) {
            setCourseLength(user.coursesBought.length)
        }
    }, [user])
 

    return (     
      <div className="sidebar fixed">
          {/* <a href="#" className="logo c333">
            <FeatherIcon icon="book-open"className="icon s20"/>
            <span className="aic logo-title s24">
              <Link to="/home">Нүүр</Link>
            </span>
          </a> */}

          <ul className="nav">
            <li className="nav-item active sHeading4">
                <FeatherIcon icon="home"className="icon s20"/>
                <Link to={`/home`}>Нүүр</Link>
            </li>
            <li className="nav-item active sHeading4">
                <FeatherIcon icon="book-open"className="icon s20"/>
                <Link to={`/profile`}>{name}</Link>
            </li>
            <li className="nav-item sHeading4">
                <FeatherIcon icon="radio"className="icon s20"/>
                <Link to="/addCourse">Хичээл заах</Link>
            </li>
            <li className="nav-item sHeading4">
                <FeatherIcon icon="play"className="icon s20"/>
                <Link to="/myCourses">Хичээл үзэх
                  <span className="count-tag">{courseLength}</span>
                </Link>
            </li>
            <li className="nav-item sHeading4">
                <FeatherIcon icon="shopping-cart"className="icon s20"/>
                <Link to="/cart">Сагс
                  <span className="count-tag">{cartLength}</span>
                </Link>
            </li>
          </ul>

          <div className="last-watched-course flex aic">
            <FeatherIcon icon="play" fill="transparent" className="icon s20"/>
            <div className="lbl fontb c333">
              Сүүлд үзсэн хичээл
              <h2 className="author s13 c777">багш: Minjin</h2>
            </div>
          </div>

          <div className="stats aic flex">

            <div className="stats-box flex">
              <FeatherIcon icon="award" className="icon s24" fill="transparent" stroke="#1aab53"/>
              <h2 className="val s15 c333 fontb">1800</h2>
              <h2 className="lbl s13 c777">оноо</h2>
            </div>

            <div className="stats-box flex">
              <FeatherIcon icon="battery" className="icon s24" fill="transparent" stroke="#ea5252"/>
              <h2 className="val s15 c333 fontb">45.3%</h2>
              <h2 className="lbl s13 c777">үзсэн</h2>
            </div>
            
          </div>

          <div className="me flex aic">
            <div className="photo cfff s24 bl">
              <img src={userPic}/>
            </div>
            <div className="lbl s13 fontb c333">
              <button style={{ listStyle: "None" }} type="button" className="btn"><Link to={`/profile`}><li>{name}</li></Link></button>
            </div>
          </div>

          <div className="logout-section flex">
              <button style={{ listStyle: "None"}} onClick={logoutHandler} type="button" className="btn logout">
                Гарах
                <FeatherIcon icon="log-out" className="icon s20 logout-icon" fill="transparent" stroke="#ea5252"/>
              </button>
          </div>
      </div>
    )
}

export default React.memo(SideBar)