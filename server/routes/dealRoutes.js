const express = require('express');
const router = express.Router();
const { admin, db } = require('../config/firebaseAdmin');
const { FieldValue } = require('firebase-admin/firestore');

// body
router.post('/createDeal', async (req, res) => {
    const { title, description, price, expiresAt, type } = req.body;
    console.log('Recieved $${title} for')
})

module.exports = router;