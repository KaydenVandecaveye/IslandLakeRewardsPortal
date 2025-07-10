import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';

export const Auth = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
 
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <input 
                placeholder="Email.."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password.."
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />
            <button onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}