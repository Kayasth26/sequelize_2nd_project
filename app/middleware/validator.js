const validation = require("express-joi-validation").createValidator({
    passError: true,
  });
  
  module.exports = { validation };