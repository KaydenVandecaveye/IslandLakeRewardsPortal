const express = require('express');
const router = express.Router();
const { admin, db } = require('../config/firebaseAdmin');
const { FieldValue } = require('firebase-admin/firestore');


// test
router.get("/test", (req, res) => {
  console.log("GET /api/test called");
  res.json({ message: "Users route is working!" });
});

// adding points 
router.post('/addPoints', async (req, res) => {
  const { userNumber, moneySpent } = req.body;
  console.log(`Received $${moneySpent} for user number: ${userNumber}`);
  
  try {
    const usersRef = db.collection('users');
    const querySnapshot = await usersRef.where('userNumber', '==', userNumber).get();

    if (querySnapshot.empty) {
      console.log('No matching user found.');
      return res.status(404).send({ message: 'User not found' });
    }

    const userDocRef = querySnapshot.docs[0].ref;

    // update points
    await userDocRef.update({
      points: FieldValue.increment(Number(moneySpent)),
    });

    // update money spent
    await userDocRef.update({
      moneySpent: FieldValue.increment(Number(moneySpent)),
    });

    console.log('Points incremented!');
  }
   catch (error) {
      console.error("Error incrementing points:", error);
  }
})

module.exports = router;
