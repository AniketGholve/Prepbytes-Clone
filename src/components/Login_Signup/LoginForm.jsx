import { TextField } from '@mui/material'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../Redux/Slice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const LoginForm = () => {
    let navi = useNavigate()
    let data = {}
    let dispatch = useDispatch();
    const handleChange = (e) => {
        data[e.target.name] = e.target.value
    }
    const successLogin = (username, email) => {
        let data = {
            "username": username,
            "email": email
        }
        dispatch(setUser(data))
        navi("/");
    }
    const checkLogin = async (e) => {
        e.preventDefault()
        await axios.post("https://prepbytes-clone-yczy.onrender.com/login", data)
            .then(res => !res.data.err ? successLogin(res.data.username,data.email) : toast.error("Error While Login", {
                theme: "colored"
            }))
        document.getElementById("formLogin").reset()
    }
    return (
        <form id="formLogin" onSubmit={checkLogin}>
            <ToastContainer />
            <div className="form__container">
                <div className="form-field">
                    <TextField id="loginEmail" label="Email" name='email' variant="standard" onChange={handleChange} />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Password" name='password' variant="standard" type='password' onChange={handleChange} />
                </div>
            </div>
            <div className="accept-terms-and-conditions-container">
                <input type="checkbox" className="terms-and-conditions-checkbox" name="terms-and-conditions" checked />
                <span className="accept-terms-and-conditions-label">I agree to the <Link to="https://www.prepbytes.com/terms-and-conditions" target="_blank" className="terms-and-conditions-link">terms and conditions</Link>.</span>
            </div>
            <button type="Submit" className="form-button">SIGN IN</button>
            <p className="form-status"></p>
        </form>
    )
}

export default LoginForm