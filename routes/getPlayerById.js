const express = require("express");
const PlayerScore = require("../model/player_score");
const router = express.Router();

router.post("/", async (req, res) => {
  var playerReq = req.body;
  const isExistPlayer = await PlayerScore.findOne({ auth_id: playerReq.auth_id });
  console.log(isExistPlayer);
  if (isExistPlayer) {
    res.status(200).send(isExistPlayer);
  } else {
    res.status(404).send({message:"new player"});
  }
 
});

module.exports = router;
