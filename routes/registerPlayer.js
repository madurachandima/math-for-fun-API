const express = require("express");
const Register = require("../model/register");

const router = express.Router();

router.post("/", async (req, res) => {
  const newRegister = req.body;
  console.log(req);
  const isExistUserName = await Register.findOne({ username: req.body.username });
  if (isExistUserName) return res.send("Username is already taken");


  const register = new Register({
    username: newRegister.username,
    password: newRegister.password,
  });
  var registerResp = await register.save();
  console.log(registerResp);
  res.status(200).send(registerResp);
});

module.exports = router;
