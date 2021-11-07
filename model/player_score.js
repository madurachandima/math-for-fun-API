const mongoose = require("mongoose");

const player = mongoose.model(
  "player_score",
  new mongoose.Schema({
    auth_id:String,
    playerId: String,
    playerName: String,
    playerScore: Number,
    country:String,
    date: { type: Date, default: Date.now },
  })
);

module.exports = player;
