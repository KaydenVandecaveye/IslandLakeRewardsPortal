import { db } from "../config/firebase";
import { useState } from "react";
import { collection, query, where, getDocs, updateDoc, increment } from "firebase/firestore";

function Dashboard() {
    const [userNum, setUserNum] = useState("");
    const [amountSpent, setAmountSpent] = useState(0);


    const incPoints = async (userNumber) => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("userNumber", "==", userNumber));

        try {
            const querySnapshot = await getDocs(q);
        
            if (querySnapshot.empty) {
              console.log("No matching user found");
              return;
            }
        
            const userDoc = querySnapshot.docs[0].ref;
        
            await updateDoc(userDoc, {
              points: increment(1),
            });
        
            console.log("Points incremented!");
          } catch (error) {
            console.error("Error incrementing points:", error);
          }
    }

    const handleSubmit = async () => {
        if (amountSpent === 0 || userNum === "") {
            alert("Invalid submission, please fill all fields.");
        }
        fetch('http://localhost:3001/user/addPoints', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userNumber: userNum,
                moneySpent: amountSpent
            })
        })
    }
    
    return (
        <div>
            <h2>Dashboard</h2>
            <input
                placeholder="User Number"
                onChange={(e) => setUserNum(e.target.value)}
            />
            <input
                placeholder="Amount spent"
                onChange={(e) => setAmountSpent(e.target.value)}
            />
            <button
                onClick={() => handleSubmit()}
            >
                Submit
            </button>
        </div>
    )
}

export default Dashboard;