const express = require("express");
const router = express.Router();
const {
    addSuggestions,
    getSuggestions
   
 
} = require("../Controllers/Suggestion");

router.get("/", getSuggestions);
router.post("/add", addSuggestions);

module.exports = router;
