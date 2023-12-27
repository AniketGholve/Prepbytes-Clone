import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import axios from "axios"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setUser } from "../Redux/Slice"

const SignupForm = () => {
    let data={}
    let navi=useNavigate()
    let dispatch=useDispatch()
    const handleChange = (e)=>{
        data[e.target.name]=e.target.value
    }
    const successLogin=(username)=>{
        dispatch(setUser(username))
        navi("/");
    }
    const checkLogin = (e) => {
        e.preventDefault()
        axios.post("https://prepbytes-clone-yczy.onrender.com/register",data).then(res=>res.status===200 && successLogin(data.name))
        console.log(data)
    }
    return (
        <form className="form">
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Name" name="name" variant="standard" onChange={handleChange}/>
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Email" name="email" variant="standard" onChange={handleChange} />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Phone No" name="phone-no" variant="standard" onChange={handleChange}/>
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Password" name="password" type="password" variant="standard" onChange={handleChange} />
                </div>
            </div>
            <div className="register-select">
                <div className="select-college-container">
                    <div className="form-field">
                        <TextField label="College" name="college" variant="standard" onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="passing-year"></label>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Passing Year</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Passing Year"
                            onChange={handleChange}
                            name="year"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="accept-terms-and-conditions-container">
                <input type="checkbox" className="terms-and-conditions-checkbox" name="terms-and-conditions" checked onChange={handleChange}/>
                <span className="accept-terms-and-conditions-label">I agree to the <Link href="https://www.prepbytes.com/terms-and-conditions" target="_blank" className="terms-and-conditions-link">terms and conditions</Link>.</span>
            </div>
            <button type="Submit" className="form-button" onClick={checkLogin}>Sign Up</button>
            <p className="form-status"></p>
        </form>
    )
}

export default SignupForm