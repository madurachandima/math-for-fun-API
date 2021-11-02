const mongoose = require("mongoose");

const player = mongoose.model(
  "player",
  new mongoose.Schema({
    playerId: String,
    playerName: String,
    playerScore: Number,
    date: { type: Date, default: Date.now },
  })
);

module.exports = player;
