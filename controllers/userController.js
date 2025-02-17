const getUserInformation = async (req, res) => {
  try {
   
    if (req.user) {
      return res.status(200).json({
        success: true,
        user: {
          id: req.user.id,
          username: req.user.username,
          email: req.user.email,
        },
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error, please try again later.',
    });
  }
};

module.exports = { getUserInformation };
