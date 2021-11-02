const Player = require("../model/player.js");
const express = require("express");
const verify = require("./token/verfyToken");
const router = express.Router();


router.get("/", verify, async (req, res) => {
    const isExistUserName = await Player.find({}).limit(3).sort({playerScore:-1});
    res.status(200).send(isExistUserName);
  });
  
  module.exports = router;