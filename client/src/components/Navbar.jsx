import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../redux/actions/userAction'


const Navbar = () => {
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
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h4 className="navbar-brand mt-1" >
                    <Link to="/home">Нүүр</Link>
                </h4>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <button type="button" className="btn"><Link to={`/profile`}><li>{name.toUpperCase()}</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/addCourse"><li>Хичээл заах</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/myCourses"><li>Хичээл үзэх{courseLength} </li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/cart"><li>Сагс {cartLength} </li></Link></button>
                        </li>
                    </ul>
                </div>
                <div>
                    <button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><li>Гарах</li></button>
                </div>
            </nav>
        </div>
    )
}

export default React.memo(Navbar)
