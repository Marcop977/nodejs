const auth = (req, res, next) => {
  const { user } = req.query;

  if (user == "Mario") {
    next();
  } else {
    res.status(401).send("Non autorizzato");
  }
};

module.exports = auth;
