import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodoComponent from './ListTodoComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import LoginComponent from './LoginComponent';
import AuthProvider from './security/AuthContext';
// importing auth cointext fron AuthContext.jx, 
// need to esport this  cotext from that file
import { AuthContext } from './security/AuthContext';

import './TodoApp.css'
import { useContext } from 'react';

export default function TodoApp () {

    // setting up authcontext to get data from AuthContext js file
    const authContext = useContext(AuthContext)
    
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
                            <Route path='/todo-ui/welcome/:username' element={ <WelcomeComponent /> } />
                            <Route path='/todo-ui/todos' element={ <ListTodoComponent /> } />
                            <Route path='/todo-ui/logout' element={ <LogoutComponent /> } />
                            <Route path='*' element={ <ErrorComponent /> } />
                        </Routes>
                    <FooterComponent/>
                </BrowserRouter>     
            </AuthProvider>       
            {/* <WelcomeComponent /> */} 
        </div>
    )
}