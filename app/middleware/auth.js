const jwt = require("jsonwebtoken");
const logger = require("../logger/logger");
const {UnAuthorized} =  require('../../app/utils/error');

const generateAuthToken = (body) => {
return jwt.sign({ email: body.email },process.env.SECRET_KEY,
    {
      expiresIn: '72h'
    });
};

const authenticate = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (token) {
    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length);
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        logger.error(err);
        next(new UnAuthorized("Invalid Auth"));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    next(new UnAuthorized("Token is not Define.."));
  }
};

module.exports = {
  generateAuthToken,
  authenticate,
};
