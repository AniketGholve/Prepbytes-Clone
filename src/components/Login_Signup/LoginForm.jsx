import { TextField } from '@mui/material'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../Redux/Slice'

const LoginForm = () => {
    let navi=useNavigate()
    let data={}
    let dispatch=useDispatch();
    const handleChange = (e)=>{
        data[e.target.name]=e.target.value
    }
    const successLogin=(username)=>{
        dispatch(setUser(username))
        navi("/");
    }
    const checkLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/login",data).then(res=>res.status===200 && successLogin(res.data.username))
    }
    return (
        <form className="form" onSubmit={checkLogin}>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Email" name='email' variant="standard"  onChange={handleChange}/>
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Password" name='password' variant="standard" type='password' onChange={handleChange}/>
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