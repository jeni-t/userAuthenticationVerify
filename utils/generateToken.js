const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  console.log(JWT_SECRET,"seceret")

  return token;
};

module.exports = generateToken;
