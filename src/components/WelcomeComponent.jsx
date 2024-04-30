import { useParams, Link} from 'react-router-dom';

function WelcomeComponent() {

    const {username} = useParams()
    return (
        <div className='welcomeComponent'>
            <h1>Welcome {username} !!!</h1>
            <div className="Welcome">
                Mange your <Link to="/todo-ui/todos">Todos</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent;