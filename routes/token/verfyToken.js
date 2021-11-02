const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = "";
  token = req.header("authorization");

  if (!token)
    return res.status(404).send({ message: "Access Denied" });

  try {
    const veryfied = jwt.verify(token, "324455fdfht#^&#cb3@$");
    req.user = veryfied;
    next();
  } catch (err) {
    res.status(404).send({ message: "Invalid Token", data: "" });
  }
};
