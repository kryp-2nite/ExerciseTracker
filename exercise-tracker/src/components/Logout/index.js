import { useNavigate } from 'react-router-dom'
import "./style.css"


function Logout() {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div>
            <button className="logout__btn" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Logout
