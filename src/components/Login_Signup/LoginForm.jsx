import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <form className="form">
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Email" variant="standard" />
                </div>
            </div>
            <div className="form__container">
                <div className="form-field">
                    <TextField label="Password" variant="standard" type='password' />
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