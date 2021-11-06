const Player = require("../model/player_score.js");
const verify = require("./token/verfyToken");
const express = require("express");


const router = express.Router();

router.post("/",verify, async (req, res) => {
  const newPalyer = req.body;

  //get player using id
  // is exsist check current score is grater than old score
  // is true update score
  var resp = await Player.findOneAndUpdate(
    { playerId: newPalyer.playerId },
    {
      $max: {
        playerScore: newPalyer.playerScore,
      },
    }
  );

  if (!resp) {
    const player = new Player({
      playerId: newPalyer.playerId,
      playerName: newPalyer.playerName,
      playerScore: newPalyer.playerScore,
    });
    var playerResp = await player.save();
    res.status(200).send(playerResp);
  } else {
    const isExistPlayer = await Player.findOne({
      playerId: newPalyer.playerId,
    });
    res.status(200).send(isExistPlayer);
  }
});

module.exports = router;
