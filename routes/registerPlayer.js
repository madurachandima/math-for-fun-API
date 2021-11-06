const express = require("express");
const Register = require("../model/register");

const router = express.Router();

router.post("/", async (req, res) => {
  const newRegister = req.body;
  console.log(req);
  const isExistUserName = await Register.findOne({ username: req.body.username });
  if (isExistUserName) return res.send({data:"Username is already taken"});

if(!newRegister.username)return  res.status(200).send({data:"Username is empty"});

if(!newRegister.password)return  res.status(200).send({data:"Password is empty"});

if(!newRegister.country)return  res.status(200).send({data:"country is empty"});

  const register = new Register({
    username: newRegister.username,
    password: newRegister.password,
    countrey: newRegister.country,
  });
  var registerResp = await register.save();
  console.log(registerResp);
  res.status(200).send({data:"Registration success"});
});

module.exports = router;
