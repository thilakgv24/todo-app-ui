import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodoComponent from './ListTodoComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './security/AuthContext';
// importing auth cointext fron AuthContext.jx, 
// need to esport this  cotext from that file
//import { AuthContext } from './security/AuthContext';

import './TodoApp.css'
//import { useContext } from 'react';

function AuthenticatedRoute( {children}) {
    const authContext = useAuth()

    if(authContext.isAuthenitcated)
        return children

    return <Navigate to ='/todo-ui'/>

}

export default function TodoApp () {

    // setting up authcontext to get data from AuthContext js file
    //const authContext = useContext(AuthContext)
    
    return (
        <div className="TodoApp">
            {/* Todo Management App V1 */}
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                        <Routes>
                            <Route path='/' element={ <LoginComponent />} />
                            <Route path='/todo-ui' element={ <LoginComponent />} />
                            <Route path='/todo-ui/login' element={ <LoginComponent /> } />

                            <Route path='/todo-ui/welcome/:username' element={ 
                            <AuthenticatedRoute>
                                    <WelcomeComponent /> 
                            </AuthenticatedRoute>} />
                            <Route path='/todo-ui/todos' element={ 
                            <AuthenticatedRoute>
                                <ListTodoComponent /> 
                            </AuthenticatedRoute>} />
                            <Route path='/todo-ui/logout' element={ 
                            <AuthenticatedRoute>
                                <LogoutComponent /> 
                            </AuthenticatedRoute>} />
                            <Route path='*' element={ <ErrorComponent /> } />
                        </Routes>
                    <FooterComponent/>
                </BrowserRouter>     
            </AuthProvider>       
            {/* <WelcomeComponent /> */} 
        </div>
    )
}