const express = require('express');
const router = express.Router();
const { admin, db } = require('../config/firebaseAdmin');
const { FieldValue } = require('firebase-admin/firestore');

// body
router.post('/createDeal', async (req, res) => {
    const dealData = req.body;
    console.log(`Recieved deal data: ${dealData}.`);

    try {
        await db.collection('deals').add(dealData);
        res.status(201).send({ message: 'Deal successfully added' });
    }
    catch(e) {
        console.error('Error adding deal:', error);
        res.status(500).send({ error: 'Failed to add deal' });
    }
})

module.exports = router;