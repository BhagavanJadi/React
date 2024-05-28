import { useState } from "react"
import { useNavigate } from "react-router-dom"
function LoginComponent() {

    const [username, setUsername] = useState('Bhagavan')
    const [password, setPassword] = useState('')

    const [showSuccessMessage,setSuccessMessage] = useState(false)
    const [showErrorMessage,setErrorMessage] = useState(false)

    const navigate = useNavigate();

    function handleUserNameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(username==='Bhagavan' && password==='jadi') {
            setSuccessMessage(true);
            setErrorMessage(false);
            navigate(`/welcome/${username}`)
        }
        else {
            setErrorMessage(true);
            setSuccessMessage(false);
            navigate('/login')
            
        }
    }


    return (
        <div className="Login">
                <h1>Time to Login</h1>

            {showSuccessMessage &&  <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authenticated Failed .Please check your credentials</div>}
            <div className="LoginForm">

                <div>
                    <label>UserName</label>
                    <input type="text" name="UserName" value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>

                <div>
                    <button type="button" name="Login" onClick={handleSubmit}>Login</button>
                </div>

            </div>
        </div>
    )
}

export default LoginComponent