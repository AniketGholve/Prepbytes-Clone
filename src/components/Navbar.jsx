import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getUser } from "./Redux/Slice"

const Navbar = () => {
    let Navi = useNavigate()
    let dispatch = useDispatch()
    let [loggedUser, setLoggedUser] = useState(null)
    let toggleUserOption = () => {
        let toggleClass = document.getElementById("userOption");
        let overlay = document.getElementById("overlay");
        toggleClass.classList.contains("d-none") ? toggleClass.classList.remove("d-none") : toggleClass.classList.add("d-none")
        overlay.classList.contains("d-none") ? overlay.classList.remove("d-none") : overlay.classList.add("d-none")
    }
    const username = useSelector((state) => state.username)
    let handleLogout = () => {
        localStorage.clear()
        dispatch(getUser());
        setLoggedUser(username)
    }
    useEffect(() => {
        setLoggedUser(localStorage.getItem("username"))
    }, [username])
    return (
        <>
            <div className="overlay d-none" id="overlay"onClick={toggleUserOption}> </div>
            <div className='nav'>
                <div className='logo' onClick={() => Navi('/')}></div>
                <div className={!loggedUser ? 'nav-routes' : 'nav-routes nav-routes-flex'}>
                    {!loggedUser && <div>
                        <button className="loginBtn" onClick={() => Navi("/login")}>Login</button>
                        <button className="signupBtn" onClick={() => Navi("/signup")}>Signup</button>
                    </div>}
                    <ul>
                        <li className="studyTab">Study Material <i className="fa-solid fa-caret-down"></i>
                            <ul className="dropdown1" >
                                <li><Link to={"/mock-test"}>Mock Test</Link></li>
                                <li><Link to={"/preparation-videos"}>Video Tutorial</Link></li>
                            </ul>
                        </li>
                        <li className="coursesTab">Courses and Program <i className="fa-solid fa-caret-down"></i>
                            <ul className="dropdown2">
                                <li><Link to={"/master-competitive-programming"}>Master Competitive Programming</Link></li>
                                <li><Link to={"/online-full-stack-developer-mern-certification-program"}>Full Stack Program</Link></li>
                            </ul>
                        </li>
                        <li><Link to={"/mern-stack-web-development-career"}>Elevated Academy</Link></li>
                        <li><Link>Project</Link> </li>
                    </ul>
                    {
                        loggedUser && <div className="userInfo" onClick={toggleUserOption}>
                            <div className="userNameLogo">
                                <h3>{loggedUser.slice(0, 1)}</h3>
                            </div>
                            <div className="userName">
                                <h4>Hi {loggedUser}</h4>
                            </div>
                        </div>
                    }
                    {
                        loggedUser && <div id="userOption" className="userOptionDiv d-none">
                            <div className="popup-container">
                                <Link className="item item-dashboard" to="/dashboard">
                                    <div className="item-left">
                                        <img src="" alt="" />
                                        <p className="item-left-text item-left-text-dashboard">My Dashboard</p>
                                    </div>
                                </Link>
                                <div className="item item-logout" onClick={() => handleLogout()}>
                                    <p className="item-logout-text">Logout</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar