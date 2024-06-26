import { useParams,Link } from "react-router-dom"

function WelcomeComponent() {

    const {username} = useParams()
    return (
        <div className='welcomecomponent'>
            <h1>Welcome {username}</h1>
            <div>
                Manage Your Todos - <Link to ="/todos">Todos</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent