import { useNavigate } from 'react-router-dom'



function Logout() {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div>
            <button className="button" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Logout
