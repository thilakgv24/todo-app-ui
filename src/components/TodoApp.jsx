import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export default function TodoApp () {
    
    return (
        <div className="TodoApp">
            Todo Management App V1

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <LoginComponent />}></Route>
                    <Route path='/login' element={ <LoginComponent /> }></Route>
                    <Route path='/welcome' element={ <WelcomeComponent /> }></Route>
                </Routes>
            </BrowserRouter>
            
            {/* <WelcomeComponent /> */} 
        </div>
    )
}

function LoginComponent() {

    // adding default for the user retains the value, a react state
    const [userName, setUserName]  = useState('sachin');
    const [password, setPassword]  = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessages, setShowErrorMessage] = useState(false);

    const navigate = useNavigate()

    function handleUserNameChange(event) {
        setUserName(event.target.value); // this is coming from event from browser
        
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        if(userName === 'sachin' && password === 'dummy')  {
            console.log('sucess')   
            setShowSuccessMessage(true) 
            setShowErrorMessage(false)  
            navigate('/welcome')     
        } else {
            console.log('Failed')
            setShowSuccessMessage(false)  
            setShowErrorMessage(true)
        }
    }   

    // function SuccessMessageComponent() {
    //     if(showSuccessMessage) {
    //         return  
    //     }
    //     return null;
    // }

    // function ErrorMessageComponent() {
    //     if(showErrorMessages) {
    //         return  
    //     }
    //     return null;
    // }

    return (
        <div className="Login">
            {showSuccessMessage && <div className = "successMessage">Autnehticated Successfully</div>}

            {showErrorMessages && <div className = "ErrorMessage">Autnehtication Failed</div>}
            <div className="LoginForm">
                <div>
                    <label>User name</label>
                    <input 
                    type="text" 
                    name="userName" 
                    placeholder="Enter User Name"
                    value={userName}
                    onChange={handleUserNameChange}
                    >

                    </input>
                </div>
                <div>
                    <label>User Password</label>
                    <input 
                    type="password" 
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    >

                    </input>
                </div>
                <div>
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <div>
                    <button>Reset</button>
                </div>

            </div>
            
           {/* <SuccessMessageComponent/> */}
           {/* <ErrorMessageComponent/> */}
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}