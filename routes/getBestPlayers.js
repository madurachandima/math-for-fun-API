const Player = require("../model/player_score.js");
const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    const isExistUserName = await Player.find({}).limit(3).sort({playerScore:-1});
    res.status(200).send(isExistUserName);
  });
  
  module.exports = router;