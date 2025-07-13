const express = require('express');

const router = express.Router();

// test route
router.get("/test", (req, res) => {
  console.log("GET /api/test called");
  res.json({ message: "Users route is working!" });
});

module.exports = router;
