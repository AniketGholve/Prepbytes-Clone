import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    let Navi = useNavigate()
    return (
        <div className='nav'>
            <div className='logo' onClick={() => Navi('/')}></div>
            <div className='nav-routes'>
                
                <div>
                    <button className="loginBtn">Login</button>
                    <button className="signupBtn">Signup</button>
                </div>
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
                {/* <div className="userInfo">
                    <div className="userNameLogo">
                        <h3>A</h3>
                    </div>
                    <div className="userName">
                        <h4>Hi Aniket</h4>
                    </div>
                </div>   */}
            </div>
        </div>
    )
}

export default Navbar