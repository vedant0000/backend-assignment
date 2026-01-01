const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
    res.json({
        message : "Protected data accessed",
        user : req.user
    });
});

module.exports = router;