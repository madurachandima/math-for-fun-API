const Player = require("../model/player_score.js");
const express = require("express");


const router = express.Router();

router.post("/", async (req, res) => {
  const newPalyer = req.body;
console.log(newPalyer);
  var resp = await Player.findOneAndUpdate(
    { auth_id: newPalyer.auth_id },
    {
      $max: {
        playerScore: newPalyer.playerScore,
      },
    }
  );

  if (!resp) {
    const player = new Player({
      auth_id:newPalyer.auth_id,
      playerId: newPalyer.playerId,
      playerName: newPalyer.playerName,
      playerScore: newPalyer.playerScore,
    });
    var playerResp = await player.save();
    res.status(200).send(playerResp);
  } else {
    const isExistPlayer = await Player.findOne({
      auth_id: newPalyer.auth_id,
    });
    res.status(200).send(isExistPlayer);
  }
});

module.exports = router;
