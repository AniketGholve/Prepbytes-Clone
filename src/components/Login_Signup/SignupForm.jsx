import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Link } from "react-router-dom"

const SignupForm = () => {
    return (
        <form className="form">
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Name" variant="standard" />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Email" variant="standard" />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Phone No" variant="standard" />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Password" type="password" variant="standard" />
                </div>
            </div>
            <div className="register-select">
                <div className="select-college-container">
                    <div className="form-field">
                        <TextField label="College" variant="standard" />
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
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="accept-terms-and-conditions-container">
                <input type="checkbox" className="terms-and-conditions-checkbox" name="terms-and-conditions" checked />
                <span className="accept-terms-and-conditions-label">I agree to the <Link href="https://www.prepbytes.com/terms-and-conditions" target="_blank" className="terms-and-conditions-link">terms and conditions</Link>.</span>
            </div>
            <button type="Submit" className="form-button">Sign Up</button>
            <p className="form-status"></p>
        </form>
    )
}

export default SignupForm