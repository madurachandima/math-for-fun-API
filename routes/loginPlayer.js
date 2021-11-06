const express = require("express");
const Register = require("../model/register");
const router = express.Router();

router.post("/", async (req, res) => {
  const newRegister = req.body;
  const isExistUserName = await Register.findOne({ auth_id: newRegister.auth_id });
  if (isExistUserName) {
    res.status(200).send({
      auth_id: isExistUserName.auth_id,
      username: isExistUserName.username,
      country: isExistUserName.country,
      date: isExistUserName.date,
    });
  } else {
    const register = new Register({
      auth_id: isExistUserName.auth_id,
      username: isExistUserName.username,
      country: isExistUserName.country,
      date: isExistUserName.date,
    });
    var registerResp = await register.save();
    res.status(200).send(registerResp);
  }
});

module.exports = router;
