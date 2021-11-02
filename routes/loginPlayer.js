const express = require("express");
const Register = require("../model/register");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
  const newRegister = req.body;

  const user = await Register.findOne({
    username: newRegister.username,
  });

  if (!user)
    return res.status(404).send({ message: "User not found", token: "" });

  if (newRegister.password != user.password)
    return res.status(401).send({ message: "User not found", token: "" });

    //create JWT token
    const token = jwt.sign({ _id: user._id }, "324455fdfht#^&#cb3@$");
    res
    .header("authorization", token)
    .send({ message: "Sucess", token: token });
});

module.exports = router;
