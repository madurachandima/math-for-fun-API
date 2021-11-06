const express = require("express");
const Register = require("../model/register");
const router = express.Router();

router.post("/", async (req, res) => {
  const newRegister = req.body;
  console.log(newRegister);
  const isExistUser = await Register.findOne({ auth_id: newRegister.auth_id });
  console.log(isExistUser);
  if (isExistUser) {
    res.status(200).send({
      auth_id: isExistUser.auth_id,
      username: isExistUser.username,
      country: isExistUser.country,
      date: isExistUser.date,
    });
  } else {
    const register = new Register({
      auth_id: newRegister.auth_id,
      username: newRegister.username,
      country: newRegister.country,
      date: newRegister.date,
    });
    var registerResp = await register.save();
    console.log(registerResp);
    res.status(200).send(registerResp);
  }
});

module.exports = router;
