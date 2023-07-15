const express = require("express");
const router = express.Router();
const {
    addNotice,
    getNotice,
   
 
} = require("../controller/notice.controller");

router.get("/", getNotice);
router.post("/add", addNotice);

module.exports = router;
