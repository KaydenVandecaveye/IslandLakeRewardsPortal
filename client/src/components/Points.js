import { useState } from "react";

function Points() {
    const [userNum, setUserNum] = useState("");
    const [amountSpent, setAmountSpent] = useState("");


    const handleSubmit = async () => {
        const amount = parseFloat(amountSpent); // convert to number
      
        if (!userNum || isNaN(amount) || amount <= 0) {
          alert("Invalid submission, please fill all fields with valid values.");
          return; // stop here
        }
      
        try {
          const response = await fetch('http://localhost:3001/user/addPoints', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userNumber: userNum,
              moneySpent: amount, // send as number
            }),
          });
      
          if (!response.ok) {
            alert("Error submitting data");
          } else {
            alert("Points added successfully!");
            setUserNum("");
            setAmountSpent("");
          }
        } catch (error) {
          alert("Network error: " + error.message);
        }
  };
    
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-10">
      <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800 font-sans">Add Points</h2>
  
      <input
        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg mb-4 text-sm focus:outline-none"
        placeholder="User Number"
        value={userNum}
        onChange={(e) => setUserNum(e.target.value)}
      />
  
      <input
        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg mb-6 text-sm focus:outline-none "
        placeholder="Amount Spent"
        value={amountSpent}
        onChange={(e) => setAmountSpent(e.target.value)}
      />
  
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm transition-all"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Points;