import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom';

export default function TodoApp () {
    
    return (
        <div className="TodoApp">
            {/* Todo Management App V1 */}

            <BrowserRouter>
                <Routes>
                    <Route path='/todo-ui' element={ <LoginComponent />} />
                    <Route path='/todo-ui/login' element={ <LoginComponent /> } />
                    <Route path='/todo-ui/welcome/:username' element={ <WelcomeComponent /> } />
                    <Route path='/todo-ui/todos' element={ <ListToDoComponent /> } />
                    <Route path='*' element={ <ErrorComponent /> } />
                </Routes>
            </BrowserRouter>
            
            {/* <WelcomeComponent /> */} 
        </div>
    )
}

function LoginComponent() {

    // useState Hook allows us to track state in a function component.
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
            navigate(`/todo-ui/welcome/${userName}`)     
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
            <div className='LoginCompnent'>
                <h1>
                    Time to track your ToDos!!!
                </h1>
            </div>
            {/* <SuccessMessageComponent/> */}
           {/* <ErrorMessageComponent/> */}

            {/* adding error component u-pdated to above*/}
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
        </div>
    )
} 

function WelcomeComponent() {

    const {username} = useParams()
    return (
        <div className='welcomeComponent'>
            <h1>Welcome to ToDo Management App {username}</h1>
            <div className="Welcome">
                Mange Todos - <Link to="/todo-ui/todos">Your Todos</Link>
            </div>
        </div>
    )
}



function ListToDoComponent() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())
    const todos = [ {id: 1, description: "Learn Spring boot", done:false, targetDate:targetDate}, 
        {id: 2, description: "Learn React", done:false, targetDate:targetDate},
         {id: 3, description: "Learn Docker", done:false, targetDate:targetDate}, 
         {id: 4, description: "Learn Kubernetes", done:false, targetDate:targetDate},
         {id: 5, description: "Learn AWS", done:false, targetDate:targetDate}]

    return (
        <div className='ListToDoComponent'>
            <h1>Things you want To Do!!!</h1>
            <div>
               <thead>
               <tr>
                    <td>Id</td>
                    <td>Description</td>
                    <td>Is Done</td>
                    <td>Target Date</td>
                </tr>
               </thead>
               <tbody>
                {/* dynamic values is by {} */}
                {
                    todos.map(
                        todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        )                    
                    )
                }
               </tbody>
            </div>
        </div>
    )
}



function ErrorComponent() {
    return (
        <div className='ErrorComponet'>
            <h1>we are working really  hard!</h1>
            <div>
                Apologies for the 404. Please reach out to our team...
            </div>
        </div>
    )
}