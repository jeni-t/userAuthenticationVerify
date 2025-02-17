const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    try {
      token = req.headers.authorization.split(' ')[1]; 

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select('-password'); 

      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      req.user = {
        id: user._id,
        username: user.username,
        email: user.email,
      };

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token, authorization denied',
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'Access Denied: No token provided',
    });
  }
};

module.exports = verifyToken;
