import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function HeaderComponent() {

    //const authContext =  useContext(AuthContext);
    // a simplified code, it s hook
    const authContext = useAuth();

    const isAunthenticated = authContext.isAuthenitcated
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    {/* <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">ToDo App</a> */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li 
                            className="nav-item fs-5 fw-bold text-black">
                                { isAunthenticated 
                                && <Link className="nav-link" to="/todo-ui/welcome/sachin">
                                    Home
                                </Link>}
                            </li>
                            <li 
                            className="nav-item fs-5 fw-bold text-black">
                                { isAunthenticated 
                                && <Link className="nav-link" to="/todo-ui/todos">
                                    Todos
                                </Link>}
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        {!isAunthenticated 
                                && <li className="nav-item fs-5 fw-bold text-black">
                            <Link className="nav-link" to="/todo-ui/login">
                                Login
                                </Link>
                        </li>} 
                        {isAunthenticated 
                            &&  <li className="nav-item fs-5 fw-bold text-black">
                                <Link className="nav-link" to="/todo-ui/logout"
                                onClick={logout}>
                                    Logout
                                </Link>
                            </li>}
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )

    function logout() {
        //authContext.setAuthenticated(false)
        authContext.logout()
    }
}

export default HeaderComponent;