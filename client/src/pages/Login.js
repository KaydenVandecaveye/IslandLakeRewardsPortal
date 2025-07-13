import Auth from "../components/Auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleNav = () => {
        navigate('/dashboard');
    }

    return (
        <div>
            <h2>IslandLake Rewards</h2>
            <Auth/>
            <button onClick={handleNav}>
                Go to dashboard
            </button>
        </div>
    );
}

export default Login;