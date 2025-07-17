import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/main');
    }
 
    const signIn = async () => {
        console.log("entered email:", email);
        console.log("entered password:", password);

        if (email === process.env.REACT_APP_ADMIN_UN && password === process.env.REACT_APP_ADMIN_PW) {
            handleNav();
        }
        else {
            alert("Invalid sign in credentials, try again.");
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <input
                className="w-full p-2 border border-gray-300 rounded mb-2"
                placeholder="Email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
            />
            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Password.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />
            <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                onClick={signIn}
            >
                Sign In
            </button>
        </div>
    )
}

export default Auth;