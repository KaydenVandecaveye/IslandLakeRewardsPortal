import { useState } from "react";

function Points() {
    const [userNum, setUserNum] = useState("");
    const [amountSpent, setAmountSpent] = useState(0);


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
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-center text-2xl font-semibold mb-4">Points</h2>
            <input
                className="w-full p-2 border border-gray-300 rounded mb-2"
                placeholder="User Number"
                value={userNum}
                onChange={(e) => setUserNum(e.target.value)}
            />
            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Amount Spent"
                value={amountSpent}
                onChange={(e) => setAmountSpent(e.target.value)}
            />
            <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}

export default Points;