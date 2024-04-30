import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function LoginComponent() {

    // useState Hook allows us to track state in a function component.
    // adding default for the user retains the value, a react state
    const [userName, setUserName]  = useState('sachin');

    const [password, setPassword]  = useState('');

    //const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessages, setShowErrorMessage] = useState(false);

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUserNameChange(event) {
        setUserName(event.target.value); // this is coming from event from browser
        
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if( authContext.login(userName, password))  {
            // setShowSuccessMessage(true) 
            // setShowErrorMessage(false)  
            navigate(`/todo-ui/welcome/${userName}`) 
        } else {
            //setShowSuccessMessage(false)  
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
            <div className='LoginCompnent'>
                <h1>
                    Time to track your ToDos!!!
                </h1>
            </div>
            {/* <SuccessMessageComponent/> */}
           {/* <ErrorMessageComponent/> */}

            {/* adding error component u-pdated to above*/}
            {/* {showSuccessMessage && <div className = "successMessage">Autnehticated Successfully</div>} */}

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
        </div>
    )
} 

export default LoginComponent;