const users = require("../data/");

const welkom = (req, res) => {
  res.send("Welkom in user");
};

const checkUser = (req, res) => {
  check_user = users.find(
    (user) => user.login == req.body.login && user.password == req.body.password
  );

  if (check_user) res.json({ data: "ok", info: check_user.id });
  else res.status(404).send({ data: "user not found" });
};

const changePSW = (req, res) => {
  CH_user = users.find((user) => user.id == req.body.id);

  if (CH_user) {
    CH_user.password = req.body.password;
    res.json({ status: "ok", CH_user });
  } else {
    res.status(404).json({ data: "user not found" });
  }
};

module.exports = {
  checkUser,
  changePSW,
  welkom,
};
